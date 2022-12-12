import React, { useEffect, useRef } from 'react'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Dimensions,
  SafeAreaView,
  Pressable
} from 'react-native'
import { connect } from 'react-redux'

import {
  COLOR_WHITE,
  HEADER_BAR_START,
  NAV_BAR_END,
  NAV_BAR_START,
  themes,
} from '../../constants/colors'
import StatusBar from '../../containers/StatusBar'
import { withTheme } from '../../theme'
import styles from './styles'
import images from '../../assets/images'
import SidebarItem from './SidebarItem'
import scrollPersistTaps from '../../utils/scrollPersistTaps'
import { logout as logoutAction } from '../../actions/login'
import { showConfirmationAlert } from '../../lib/info'
import { GradientHeader } from '../../containers/GradientHeader'
import Navigation from '../../lib/Navigation'
import I18n from '../../i18n'
import { SITE_SHOP_URL } from '../../constants/app'
import { VectorIcon } from '../../containers/VectorIcon'
import OptionCardBtn from '../../containers/OptionCardBtn'

const SidebarView = (props) => {
  const { user, theme, navigation } = props
  const home = useRef('Feed')
  const routeName = Navigation.getCurrentRoute()
  const menus = [
    {
      id: 'shop',
      name: I18n.t('Shop'),
      icon: images.briefcase,
      route: 'Shop',
      routes: ['Shop'],
    },
    {
      id: 'vip_members',
      name: I18n.t('Vip_members'),
      icon: images.stars,
      route: 'VipMembers',
      routes: ['VipMembers'],
    },
    {
      id: 'connections',
      name: 'My connections',
      icon: images.user_friends,
      route: 'VipMembers',
      routes: ['MyConnetions'],
    },
    // {
    //   id: 'feed',
    //   name: I18n.t('Feed'),
    //   icon: images.briefcase,
    //   route: 'Home',
    //   routes: ['Feed'],
    //   init: 'Feed',
    // },
    // {
    //   id: 'open_post',
    //   name: I18n.t('Open_posts'),
    //   icon: images.menu_open_post,
    //   route: 'Home',
    //   routes: ['Posts'],
    //   init: 'Posts',
    // },
    {
      id: 'privacy_and_settings',
      name: I18n.t('Privacy_and_settings'),
      icon: images.shield_lock,
      route: 'Privacy',
      routes: ['Privacy'],
    },
    {
      id: 'help_and_support',
      name: I18n.t('Help_and_support'),
      icon: images.help,
      route: 'Privacy',
      routes: ['HelpAndSupport'],
    }
  ]

  useEffect(() => {
    navigation.setOptions({
      title: 'VIP Billionaires',
      headerBackground: () => <GradientHeader />,
    })
  }, [])

  const onClick = item => {
    switch (item.id) {
      case 'terms_of_use':
        return onNavigate('About', { type: 0 })
      case 'privacy_and_settings':
        return onNavigate('About', { type: 1 })
      case 'eula':
        return onNavigate('About', { type: 2 })
      case 'shop':
        return Linking.openURL(SITE_SHOP_URL)
      case 'help_and_support':
        return onNavigate('HelpAndSupport')
      case 'MyConnections':
        return onNavigate('MyConnections')
      case 'vip_members':
        return onNavigate('')
      default:
        onNavigate(item.route, { type: item.init })
    }
  }

  const onNavigate = (routeName, params) => {
    const { navigation } = props
    const route = Navigation.getCurrentRoute()
    if (routeName === 'Home') {
      home.current = params.type
      navigation.navigate(routeName, { screen: 'Home', params: { screen: params.type } })
    } else {
      navigation.navigate(routeName, params)
    }
  }

  const onLogOut = () => {
    const { logout } = props
    showConfirmationAlert({
      title: I18n.t('Logout'),
      message: I18n.t('are_you_sure_to_log_out'),
      callToAction: I18n.t('Confirm'),
      onPress: () => {
        if (global.unSubscribeRoom) {
          global.unSubscribeRoom()
          global.unSubscribeRoom = undefined
        }
        logout()
      },
    })
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: themes[theme].backgroundColor,
        paddingHorizontal: 16,
      }}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <View
          style={styles.profileInnerContainer}
          colors={[NAV_BAR_END, NAV_BAR_START]}>
          <Image
            source={user.avatar ? {uri: user.avatar} : images.default_avatar}
            style={styles.avatar}
          />
          <View>
            <Text
              style={[
                styles.profileName,
                {color: themes[theme].activeTintColor},
              ]}>
              {user.displayName}
            </Text>
            <Text style={[styles.roleName, {color: themes[theme].infoText}]}>
              {user.role}
            </Text>
          </View>
        </View>
        <Pressable onPress={()=>navigation.toggleDrawer()} style={styles.closeIconAndText}>
          <VectorIcon
            type="AntDesign"
            name="close"
            size={11}
            color={themes[theme].activeTintColor}
            style={styles.closeIcon}
          />
          <Text>Clear</Text>
        </Pressable>
      </View>
      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: themes[theme].backgroundColor,
          paddingHorizontal: 16,
        }}
        {...scrollPersistTaps}>
        <OptionCardBtn
          image={images.reward_badge}
          title="Premium Subscription"
          smallText="Upgrade plan"
        />
        <OptionCardBtn
          image={images.fast_email_sending}
          title="Premium Subscription"
          smallText="Upgrade plan"
          rightIcon
          rightIconName="share"
        />
        <Text style={styles.menuText}>Menu</Text>
        {menus.map(m => (
          <SidebarItem
            key={m.id}
            id={`sidebar-view-key-${m.id}`}
            text={m.name}
            left={
              <Image
                source={m.icon}
                style={[
                  styles.menuIcon,
                  {
                    tintColor:
                      theme === 'light' && m.routes.includes(routeName)
                        ? 'red'
                        : themes[theme].sidemenuTintColor,
                  },
                ]}
              />
            }
            onPress={() => onClick(m)}
            current={
              m.routes.includes(routeName) &&
              (!m.init || home.current === m.init)
            }
            theme={theme}
          />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={onLogOut} style={[styles.logoutBtn, { backgroundColor: themes[theme].optionButtonBackground }]}>
        <Image source={images.logout_icon} style={styles.logoutIcon} />
        <Text
          style={[styles.logoutText, {color: themes[theme].sidemenuTintColor}]}>
          {I18n.t('Logout').toUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <View style={styles.privacyTermsEulaContainer}>
          <Text style={styles.text} onPress={()=>{}}>Privacy policy</Text>
          <Text>.</Text>
          <Text style={styles.text} onPress={()=>{}}>Terms of services</Text>
          <Text>.</Text>
          <Text style={styles.text} onPress={()=>{}}>Eula</Text>
        </View>
        <View style={styles.languageContainer}>
          <Image source={images.en_language} />
          <Text style={[styles.languageText, { color: themes[theme].languageTextColor }]}>English (US)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = dispatch => ({
  logout: params => dispatch(logoutAction(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(SidebarView))
