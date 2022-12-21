import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { withTheme } from '../../theme'
import styles from './styles'
import FloatingTextInput from '../../containers/FloatingTextInput'
import Button from '../../containers/Button'
import images from '../../assets/images'
import I18n from '../../i18n'
import ModalView from '../../containers/ModalView'

const UpdatePasswordModal = ({ isShow, onClose, theme, user }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    old_password: '',
    password: '',
  })

  const emailInput = useRef(null)
  const oldPasswordInput = useRef(null)
  const passwordInput = useRef(null)
  const confirmPasswordInput = useRef(null)


  return (
    <ModalView isShow={isShow} onClose={onClose} title={'Password Setting'} theme={theme}>
      <FloatingTextInput
        inputRef={e => {
          oldPasswordInput.current = e
        }}
        label={I18n.t('Old_password')}
        returnKeyType="next"
        keyboardType="email-address"
        textContentType="oneTimeCode"
        // onChangeText={value => setState({ ...state, old_password: value })}
        onSubmitEditing={() => {
          passwordInput.current.focus()
        }}
        theme={theme}
      />
      <FloatingTextInput
        inputRef={e => {
          passwordInput.current = e
        }}
        label={I18n.t('New_Password')}
        returnKeyType="send"
        secureTextEntry
        textContentType="oneTimeCode"
        // onChangeText={value => setState({ ...state, password: value })}
        onSubmitEditing={() => {
          confirmPasswordInput.current.focus()
        }}
        theme={theme}
      />
      <FloatingTextInput
        inputRef={e => {
          confirmPasswordInput.current = e
        }}
        iconLeft={images.password}
        label={'Confirm Password'}
        returnKeyType="send"
        secureTextEntry
        textContentType="oneTimeCode"
        // onChangeText={value => setState({ ...state, password: value })}
        theme={theme}
      />
      <Button
        style={styles.submitBtn}
        title={'SAVE'}
        size="W"
        // onPress={onSubmit}
        testID="login-submit"
        // loading={isLoading}
        theme={theme}
      />
    </ModalView>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(UpdatePasswordModal))
