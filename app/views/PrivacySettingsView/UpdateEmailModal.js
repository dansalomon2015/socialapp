import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { withTheme } from '../../theme'
import styles from './styles'
import Modal from 'react-native-modal'
import { themes } from '../../constants/colors'
import FloatingTextInput from '../../containers/FloatingTextInput'
import Button from '../../containers/Button'
import I18n from '../../i18n'
import { isValidEmail } from '../../utils/validators'

const UpdateEmailModal = ({ isShow, onClose, theme, user }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const emailInput = useRef(null)

  const isValid = () => {
    setErrEmail('')
    if (!email.length) {
      setErrEmail(I18n.t('please_enter_email'))
      emailInput.current.focus()
      return false
    }
    if (!isValidEmail(email)) {
      setErrEmail(I18n.t('error-invalid-email-address'))
      emailInput.current.focus()
      return false
    }
    return true
  }
  const onSubmit = () => {
    if (isValid()) {
      // setIsLoading(true)
    }
  }

  return (
    <Modal
      isVisible={isShow}
      avoidKeyboard
      onBackdropPress={onClose}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <View style={[styles.modalContent, { backgroundColor: themes[theme].backgroundColor }]}
            onPressOut={onClose}>
        <Text style={[styles.modalTitle, { color: themes[theme].titleColor }]}>Email Setting</Text>
        <FloatingTextInput
          inputRef={emailInput}
          keyboardType="email-address"
          textContentType="oneTimeCode"
          label={I18n.t('Email')}
          placeholder={'Enter your email'}
          // onChangeText={val => setEmail(val)}
          theme={theme}
          error={errEmail}
        />
        <Button
          style={styles.submitBtn}
          title={'SAVE'}
          size="W"
          onPress={onSubmit}
          loading={isLoading}
          theme={theme}
        />
      </View>
    </Modal>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(UpdateEmailModal))
