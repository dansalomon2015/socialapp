import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { withTheme } from '../../theme'
import styles from './styles'
import Modal from 'react-native-modal'
import { themes } from '../../constants/colors'
import FloatingTextInput from '../../containers/FloatingTextInput'
import Button from '../../containers/Button'

const AccountSettingsModal = ({ isShow, onClose, theme, user }) => {
  const [name, setName] = useState(user.displayName)
  const [username, setUsername] = useState('')
  const nameInput = useRef(null)
  const usernameInput = useRef(null)

  const onClick = item => {

  }

  return (
    <Modal
      // transparent={true}
      isVisible={isShow}
      avoidKeyboard
      onBackdropPress={onClose}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <View style={[styles.modalContent, { backgroundColor: themes[theme].backgroundColor }]}
            onPressOut={onClose}>
        <Text style={[styles.modalTitle, { color: themes[theme].titleColor }]}>Account Setting</Text>
        <FloatingTextInput
          returnKeyType="next"
          textContentType="oneTimeCode"
          // value={user.displayName}
          label={'Name'}
          placeholder={'Enter Your Name'}
          // onChangeText={name => setName({ name })}
          theme={theme}
          onSubmitEditing={() => {
            usernameInput.current.focus()
          }}
        />
        <FloatingTextInput
          inputRef={usernameInput}
          textContentType="oneTimeCode"
          label={'username'}
          // value={user.handle}
          placeholder={'Enter Your Username'}
          onChangeText={username => setUsername({ username })}
          theme={theme}
        />
        <Button
          style={styles.submitBtn}
          title={'SAVE'}
          size="W"
          // onPress={onSubmit}
          // loading={isLoading}
          theme={theme}
        />
      </View>
    </Modal>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(AccountSettingsModal))
