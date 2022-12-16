import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import {
  NAV_BAR_END,
  NAV_BAR_START,
  themes,
} from '../../constants/colors'
import { VectorIcon } from '../../containers/VectorIcon'

const Item = React.memo(
  ({ id, left, text, onPress, current, textStyle, theme }) => {
    return (
      <TouchableOpacity
        key={id}
        onPress={onPress}
        underlayColor="#292E35"
        activeOpacity={0.3}
        style={[styles.container, {
          backgroundColor: current ? 'red' : themes[theme].focusedBackground,
        }]}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>{left}</View>
          <View style={styles.itemCenter}>
            <Text style={[styles.itemText, textStyle, { color: themes[theme].sidemenuTintColor }]}>
              {text}
            </Text>
          </View>
        </View>
        <VectorIcon
          type="Entypo" name="chevron-small-right" size={28} color={themes[theme].chevronIcon}
          style={styles.chevronIcon} />
      </TouchableOpacity>
    )
  },
)

export default Item
