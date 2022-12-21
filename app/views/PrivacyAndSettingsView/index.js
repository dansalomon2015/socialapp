import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import { connect } from 'react-redux'

import { COLOR_LIGHT_DARK, COLOR_RED, themes } from '../../constants/colors'
import StatusBar from '../../containers/StatusBar'
import { withTheme } from '../../theme'
import styles from './styles'
import scrollPersistTaps from '../../utils/scrollPersistTaps'
import { VectorIcon } from '../../containers/VectorIcon'
import SidebarItem from '../SidebarView/SidebarItem'
import AccountSettingsModal from './AccountSettingsModal'
import { useNavigation } from '@react-navigation/native'

const PrivacyAndSettingsView = (props) => {
  const navigation = useNavigation()
  const { user, theme } = props
  const [isShowAccountSettings, onShowAccountSettings] = useState(false)

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

  const onClick = item => {

  }

  const goToPrivacySettings = () => {
    navigation.navigate('MenuStack', { screen: 'PrivacySettings' })
    // navigation.navigate('PrivacySettings')
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: themes[theme].backgroundColor,
      }}>
      <StatusBar />
      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: themes[theme].backgroundColor,
          paddingHorizontal: 16,
        }}
        {...scrollPersistTaps}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <VectorIcon style={{ marginRight: 16 }} type="MaterialCommunityIcons" name="shield-lock"
                      color={COLOR_LIGHT_DARK} size={20} />
          <Text style={[styles.title, { color: themes[theme].titleColor }]}>Privacy and Settings</Text>
        </View>
        <SidebarItem
          text={'Account Settings'}
          onPress={() => onClick(onShowAccountSettings(true))}
          theme={theme}
          hasRight
        />
        <SidebarItem
          text={'Privacy Setting'}
          onPress={() => navigation.navigate('PrivacySettings')}
          theme={theme}
          hasRight
        />

        <View style={{ marginTop: 56, marginBottom: 16 }}>
          <Text style={[styles.title, { color: themes[theme].titleColor, margin: 0 }]}>Other Settings</Text>
        </View>
        <SidebarItem text={'Blocked Users'} onPress={() => navigation.navigate('Block')} theme={theme} hasRight />
        <SidebarItem text={'Delete Account'} textStyle={{ color: COLOR_RED }} onPress={() => onClick()} theme={theme} />
      </ScrollView>

      <AccountSettingsModal isShow={isShowAccountSettings} theme={theme} onClose={() => onShowAccountSettings(false)} />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(PrivacyAndSettingsView))
