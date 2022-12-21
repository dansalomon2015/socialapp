import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import { connect } from 'react-redux'
import { themes } from '../../constants/colors'
import StatusBar from '../../containers/StatusBar'
import { withTheme } from '../../theme'
import scrollPersistTaps from '../../utils/scrollPersistTaps'
import { VectorIcon } from '../../containers/VectorIcon'
import SidebarItem from '../SidebarView/SidebarItem'
import styles from './styles'
import firebase from '@react-native-firebase/app'
import moment from 'moment'
import { getDeviceModel, isIOS } from '../../utils/deviceInfo'
import UpdateEmailModal from './UpdateEmailModal'
import UpdatePasswordModal from './UpdatePasswordModal'

const PrivacySettingsView = (props) => {
  const lastSignInTime = firebase.auth().currentUser.metadata.lastSignInTime
  const { theme, navigation } = props
  const [isShowUpdateEmail, onShowUpdateEmailModal] = useState(false)
  const [isShowUpdatePassword, onShowUpdatePasswordModal] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themes[theme].backgroundColor }}>
      <StatusBar />
      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: themes[theme].backgroundColor,
          paddingHorizontal: 16,
        }}
        {...scrollPersistTaps}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <Text style={[styles.title, { color: themes[theme].titleColor }]}>Privacy Settings</Text>
        </View>

        <SidebarItem
          text={'Update Email Address'}
          onPress={() => onClick(onShowUpdateEmailModal(true))}
          theme={theme}
          hasRight
        />
        <SidebarItem
          text={'Change Password'}
          onPress={() => onClick(onShowUpdatePasswordModal(true))}
          theme={theme}
          hasRight
        />

        <Text style={[styles.loggedLabel, { color: themes[theme].titleColor }]}>You logged in using</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {isIOS ? (
            <VectorIcon type="AntDesign" name="apple1" color={themes[theme].textColor} size={32} />

          ) : (
            <VectorIcon type="AntDesign" name="android" color={themes[theme].textColor} size={32} />
          )}

          <View style={{ flex: 1, alignSelf: 'center', marginHorizontal: 16 }}>
            <Text style={{
              fontFamily: 'Raleway',
              fontSize: 14,
              fontWeight: '600',
              lineHeight: 16,
              color: themes[theme].textColor,
              flex: 1,
              alignItems: 'center',
              marginBottom: 4,
            }}>
              {getDeviceModel}
            </Text>
            <Text style={{
              fontFamily: 'Raleway',
              fontSize: 12,
              lineHeight: 14,
              color: themes[theme].textColor,
              alignItems: 'center',
            }}>
              {moment(lastSignInTime).format('DD MMMM YYYY H:mm A')}
            </Text>
          </View>
        </View>
      </ScrollView>

      <UpdateEmailModal
        isShow={isShowUpdateEmail} theme={theme}
        onClose={() => onShowUpdateEmailModal(false)}
      />

      <UpdatePasswordModal
        isShow={isShowUpdatePassword} theme={theme}
        onClose={() => onShowUpdatePasswordModal(false)}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(PrivacySettingsView))
