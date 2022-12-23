import React, { useEffect, useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView, useWindowDimensions, FlatList, RefreshControl, Image, TextInput,
} from 'react-native'
import { connect } from 'react-redux'

import { themes } from '../../constants/colors'
import StatusBar from '../../containers/StatusBar'
import { withTheme } from '../../theme'
import styles from './styles'
import { VectorIcon } from '../../containers/VectorIcon'
import { useNavigation } from '@react-navigation/native'
import { SceneMap, TabView } from 'react-native-tab-view'
import NoFriends from '../HomeView/NoFriends'
import firestore from '@react-native-firebase/firestore'
import firebaseSdk from '../../lib/firebaseSdk'
import images from '../../assets/images'
import { SearchBox } from '../../containers/SearchBox'
import I18n from '../../i18n'

const ConnectionsView = ({ theme, user }) => {
  const layout = useWindowDimensions()
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [followers, setFollowers] = useState([])
  const [followings, setFollowings] = useState([])
  const [connections, setConnections] = useState({ followers: [], followings: [] })
  const [searchKeyword, setSearchKeyword] = useState('')
  const [index, setIndex] = React.useState(0)
  const [routes, setRoutes] = React.useState([
    { key: 'first', title: 'Followers' },
    { key: 'second', title: 'Followings' },
  ])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.header} onPress={() => navigation.toggleDrawer()}>
          <VectorIcon type="MaterialCommunityIcons" name="arrow-left" color={themes[theme].titleColor} size={24} />
        </TouchableOpacity>
      ),
      title: null,
      headerRight: () => (<></>),
      headerStyle: {
        backgroundColor: themes[theme].backgroundColor,
        shadowOpacity: 0,
      },
    })
  }, [theme])

  useEffect(() => {
    init()
  }, [user])

  useEffect(() => {
    filterConnections()
  }, [searchKeyword, connections])

  const filterConnections = () => {
    if (searchKeyword.length > 0) {
      let followers = connections.followers.filter(d => {
        const key = d.displayName || ''
        return key.toLowerCase().indexOf(searchKeyword.toLowerCase()) >= 0
      })
      setFollowers(followers)

      let followings = connections.followings.filter(d => {
        const key = d.displayName || ''
        return key.toLowerCase().indexOf(searchKeyword.toLowerCase()) >= 0
      })
      setFollowings(followings)

      setRoutes([
        { key: 'first', title: `Followers (${followers.length})` },
        { key: 'second', title: `Followings (${followings.length})` },
      ])
    } else {
      setFollowers(connections.followers)
      setFollowings(connections.followings)
      setRoutes([
        { key: 'first', title: `Followers (${connections.followers.length})` },
        { key: 'second', title: `Followings (${connections.followings.length})` },
      ])
    }
  }

  const init = async () => {
    const userSnaps = await firestore().collection(firebaseSdk.TBL_USER).get()

    const followers_list = []
    const followings_list = []
    userSnaps.forEach(s => {
      const userInfo = { ...s.data(), id: s.id }
      if (user.userId !== userInfo.userId) {
        if (user.followers && user.followers.includes(userInfo.userId)) {
          followers_list.push(userInfo)
        }
        if (user.followings && user.followings.includes(userInfo.userId)) {
          followings_list.push(userInfo)
        }
      }
    })
    setIsLoading(false)
    setIsRefreshing(false)
    setConnections({ followers: followers_list, followings: followings_list })
  }

  const onRefresh = () => {
    setIsRefreshing(true)
    init()
  }

  const renderTabBar = (props) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={[styles.tabItem, index === i ? styles.activeTab : '', {
                borderBottomColor: index === i ? themes[theme].titleColor : themes[theme].borderColor,
              }]}
              onPress={() => setIndex(i)}>
              <Text style={[styles.tabText, {
                color: index === i ? themes[theme].titleColor : themes[theme].textColor,
              }]}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const unFollow = (item) => {
    // setIsRefreshing(true)
    // init()
  }

  const renderItem = ({ item }) => {
    const isFollowing = user.followings.includes(item.userId)
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemHeader}>
          <Image
            source={item.avatar ? { uri: item.avatar } : images.default_avatar}
            style={styles.itemImage}
          />
          <View style={styles.itemContent}>
            <Text style={[styles.itemText, { color: themes[theme].activeTintColor }]}>
              {item.displayName}
            </Text>
            <Text style={[styles.itemPost, { color: themes[theme].textColor }]}>
              {item.handle}
            </Text>
          </View>
        </View>
        {isFollowing && (
          <TouchableOpacity onPress={() => {unFollow(item)}}>
            <Text style={[styles.blockText, { color: themes[theme].textColor }]}>UnFollow</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }

  const RenderFlatListItem = ({ data }) => {
    if (data.length > 0 || isLoading) {
      return (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.userId}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              tintColor={themes[theme].activeTintColor}
            />
          }
        />
      )
    } else {
      return (<NoFriends isOverlay onPress={() => {}} />)
    }
  }

  const renderScene = SceneMap({
    first: (() => <RenderFlatListItem type={'followers'} data={followers} />),
    second: (() => <RenderFlatListItem type={'followings'} data={followings} />),
  })

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: themes[theme].backgroundColor,
      }}>
      <StatusBar />
      <View style={{ paddingHorizontal: 16 }}>
        <SearchBox
          onChangeText={setSearchKeyword}
          theme={theme}
          placeholder={I18n.t('Search')}
        />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
        onIndexChange={setIndex}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ConnectionsView))
