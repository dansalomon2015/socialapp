import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { withTheme } from '../../theme'
import styles from './styles'
import FloatingTextInput from '../../containers/FloatingTextInput'
import Button from '../../containers/Button'
import I18n from '../../i18n'
import { isValidEmail } from '../../utils/validators'
import ModalView from '../../containers/ModalView'

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
    <ModalView isShow={isShow} onClose={onClose} title={'Email Setting'} theme={theme}>
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
    </ModalView>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(UpdateEmailModal))
