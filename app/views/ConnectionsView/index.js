import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView, useWindowDimensions, FlatList, RefreshControl, Image,
} from 'react-native'
import { connect } from 'react-redux'

import { COLOR_LIGHT_DARK, themes } from '../../constants/colors'
import StatusBar from '../../containers/StatusBar'
import { withTheme } from '../../theme'
import styles from './styles'
import scrollPersistTaps from '../../utils/scrollPersistTaps'
import { VectorIcon } from '../../containers/VectorIcon'
import { useNavigation } from '@react-navigation/native'
import { SceneMap, TabView } from 'react-native-tab-view'
import NoFriends from '../HomeView/NoFriends'
import firestore from '@react-native-firebase/firestore'
import firebaseSdk from '../../lib/firebaseSdk'
import images from '../../assets/images'

const ConnectionsView = ({ theme, user }) => {
  const layout = useWindowDimensions()
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [followers, setFollowers] = useState([])
  const [followings, setFollowings] = useState([])
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
    setFollowers(followers_list)
    setFollowings(followings_list)
    setIsLoading(false)
    setIsRefreshing(false)

    setRoutes([
      { key: 'first', title: `${followers_list.length < 1 ? 'Followers' : followers_list.length + ' followers'}` },
      { key: 'second', title: `${followings_list.length < 1 ? 'Followings' : followings_list.length + ' followings'}` },
    ])
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

  const renderItem = ({ item }) => {
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
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.blockText, { color: themes[theme].textColor }]}>
            Unblock
          </Text>
        </TouchableOpacity>
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
