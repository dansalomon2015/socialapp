import React, { useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { withTheme } from '../../theme'
import styles from './styles'
import Modal from 'react-native-modal'
import { themes } from '../../constants/colors'
import FloatingTextInput from '../../containers/FloatingTextInput'
import Button from '../../containers/Button'
import { VectorIcon } from '../../containers/VectorIcon'
import AntDesign from 'react-native-vector-icons/AntDesign'

const InviteModal = ({ isShow, onClose, theme, user }) => {
  const [name, setName] = useState(null)
  const onClick = item => {

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
        <Text style={[styles.modalTitle, { color: themes[theme].titleColor }]}>Invite to grow your connection</Text>
        <Text style={{ fontSize: 12, color: themes[theme].textColor, marginBottom: 8 }}>Invite body</Text>
        <View style={{ padding: 16, backgroundColor: themes[theme].buttonBackground, marginBottom: 32 }}>
          <Text style={{
            fontFamily: 'Raleway',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 22,
            color: themes[theme].textColor,
          }}>
            {`Hello \nJust joined VIP billionare. At Vipbillionaires, accessible from https://www.vipbillionaires.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Vipbillionaires and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. https://www.vipbillionaires.com/user/invite Thank you`}
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: themes[theme].textColor, marginBottom: 8 }}>Invite via</Text>
        <View style={{ flexDirection: 'row', marginBottom: 32 }}>
          <TouchableOpacity style={{ marginHorizontal: 16 }} onPress={() => {}}>
            <VectorIcon type="MaterialCommunityIcons" name="whatsapp" color={themes[theme].textColor} size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 16 }} onPress={() => {}}>
            <VectorIcon type="MaterialCommunityIcons" name="linkedin" color={themes[theme].textColor} size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 16 }} onPress={() => {}}>
            <VectorIcon type="MaterialCommunityIcons" name="facebook-messenger" color={themes[theme].textColor}
                        size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 16 }} onPress={() => {}}>
            <VectorIcon type="MaterialCommunityIcons" name="twitter" color={themes[theme].textColor} size={32} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 12, color: themes[theme].textColor, marginBottom: 8 }}>Invite URL</Text>
        <View style={{
          flexDirection: 'row',
          marginBottom: 32,
          backgroundColor: themes[theme].buttonBackground,
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 8,
          justifyContent: 'space-between',
        }}>
          <Text style={[styles.copyText, { color: themes[theme].textColor }]}>
            https://www.vipbillionaires.com/user/invite
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.copyText, { color: themes[theme].textColor }]}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(InviteModal))
