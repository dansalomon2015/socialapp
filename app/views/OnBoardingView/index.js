import React from 'react'
import { SafeAreaView, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { appStart as appStartAction } from '../../actions/app'
import images from '../../assets/images'
import StatusBar from '../../containers/StatusBar'
import Button from '../../containers/Button'
import { withTheme } from '../../theme'
import I18n from '../../i18n'
import {
  themes,
} from '../../constants/colors'
import { styles } from './style'

const theme = 'light'

const OnBoardingView = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: themes[theme].backgroundColor }}>
      <StatusBar />
      <View
        style={[
          styles.mainContainer,
          { backgroundColor: themes[theme].backgroundColor },
        ]}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>
            {I18n.t('Onboard_text_welcome')}
          </Text>
          <Text style={styles.welcomeText}>{I18n.t('Onboard_text')}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={images.logo_new} />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            style={styles.submitBtn}
            title={I18n.t('Login').toUpperCase()}
            type="primary"
            size="W"
            onPress={() => navigation.replace('SignIn')}
            testID="login-view-submit"
            theme={theme}
            pressingHighlight
          />
          <Button
            style={styles.submitBtn}
            title={I18n.t('Register')}
            type="gradient"
            size="W"
            onPress={() => navigation.replace('SignUp')}
            testID="login-view-submit"
            theme={theme}
            pressingHighlight
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const mapDispatchToProps = dispatch => ({
  appStart: params => dispatch(appStartAction(params)),
})

export default connect(null, mapDispatchToProps)(withTheme(OnBoardingView))
