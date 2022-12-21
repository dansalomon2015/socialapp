import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { withTheme } from '../../theme'
import styles from './styles'
import FloatingTextInput from '../../containers/FloatingTextInput'
import Button from '../../containers/Button'
import I18n from '../../i18n'
import { isValidEmail } from '../../utils/validators'
import ModalView from '../../containers/ModalView'
import { Divider } from 'react-native-paper'
import { COLOR_RED, themes } from '../../constants/colors'
import firebaseSdk from '../../lib/firebaseSdk'
import { showErrorAlert, showToast } from '../../lib/info'
import { logout as logoutAction, setUser as setUserAction } from '../../actions/login'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CURRENT_USER } from '../../constants/keys'
import { appInit as appInitAction } from '../../actions/app'
import { useNavigation } from '@react-navigation/native'

const UpdateEmailModal = ({ isShow, onClose, theme, user, setUser, logout }) => {
  const [email, setEmail] = useState(user.email)
  const [isLoading, setIsLoading] = useState(false)
  const [errEmail, setErrEmail] = useState('')
  const [isBtnDisable, setBtnDisable] = useState(false)
  const [password, setPassword] = useState('')
  const [errPassword, setErrPassword] = useState('')
  const emailInput = useRef(null)
  const passwordInput = useRef(null)

  useEffect(() => {
    setEmail(user.email)
  }, [isShow, user])

  useEffect(() => {
    if (isShow) {
      isValid()
    }
  }, [email, password])

  const isValid = () => {
    setErrEmail('')
    setErrPassword('')
    if (!email.length) {
      setErrEmail(I18n.t('please_enter_email'))
      setBtnDisable(true)
      emailInput.current.focus()
      return false
    }
    if (!isValidEmail(email)) {
      setErrEmail(I18n.t('error-invalid-email-address'))
      setBtnDisable(true)
      emailInput.current.focus()
      return false
    }
    if (!password.length) {
      setErrPassword(I18n.t('please_enter_password'))
      setBtnDisable(true)
      return false
    }
    setBtnDisable(false)
    return true
  }
  const onSubmit = () => {
    setIsLoading(true)

    firebaseSdk
      .reauthenticate(user.email, password)
      .then(() => {
        firebaseSdk
          .updateEmail(email)
          .then(async (data) => {
            console.log(data)
            const newUser = { ...user, email: email }
            await AsyncStorage.setItem(CURRENT_USER, JSON.stringify(newUser))
            setUser(newUser)
            setIsLoading(false)
            onClose()
            showToast('You successfully changed your email')
            setTimeout(() => { logout() }, 1000)
          })
          .catch(err => {
            setIsLoading(false)
            showErrorAlert(I18n.t('Updating_security_failed'))
            console.log('error', err)
          })
      })
      .catch(() => {
        setIsLoading(false)
        showErrorAlert(I18n.t('error-invalid-password'))
      })
  }

  return (
    <ModalView isShow={isShow} onClose={onClose} title={'Email Setting'} theme={theme}>
      <FloatingTextInput
        inputRef={emailInput}
        keyboardType="email-address"
        textContentType="oneTimeCode"
        value={email}
        label={I18n.t('Email')}
        placeholder={'Enter your email'}
        onChangeText={email => setEmail(email)}
        theme={theme}
        error={errEmail}
      />

      <Divider style={{ backgroundColor: themes[theme].borderColor, marginVertical: 16 }} />
      <Text style={{ color: COLOR_RED, marginBottom: 16, textAlign: 'center' }}>
        Are you sure to update your email? Please enter your password to confirm!
      </Text>

      <FloatingTextInput
        inputRef={passwordInput}
        label={'Password'}
        placeholder={'Enter your password'}
        onChangeText={value => setPassword(value)}
        theme={theme}
        secureTextEntry
        error={errPassword}
      />

      <Button
        style={styles.submitBtn}
        title={'SAVE'}
        size="W"
        disabled={isBtnDisable}
        onPress={onSubmit}
        loading={isLoading}
        theme={theme}
      />
    </ModalView>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = dispatch => ({
  setUser: params => dispatch(setUserAction(params)),
  appInit: () => dispatch(appInitAction()),
  logout: params => dispatch(logoutAction(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(UpdateEmailModal))
