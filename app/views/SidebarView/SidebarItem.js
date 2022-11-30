import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import {
  NAV_BAR_END,
  NAV_BAR_START,
  themes,
} from '../../constants/colors'

const Item = React.memo(
  ({ id, left, text, onPress, current, containerStyle, textStyle, theme }) => (
    <TouchableOpacity
      key={id}
      onPress={onPress}
      underlayColor="#292E35"
      activeOpacity={0.3}
      style={[containerStyle, {
        paddingRight: 24,
        marginHorizontal: 10,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: current ? themes[theme].tintActive : undefined
      }]}>
      {current ? (
        <View
          colors={[NAV_BAR_END, NAV_BAR_START]}
          style={styles.item}
          angle={90}
          useAngle>
          <View style={styles.itemLeft}>{left}</View>
          <View style={styles.itemCenter}>
            <Text
              style={[styles.itemText, textStyle, { color: 'white' }]}
              numberOfLines={2}
              ellipsizeMode={'tail'}>
              {text}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.item}>
          <View style={styles.itemLeft}>{left}</View>
          <View style={styles.itemCenter}>
            <Text
              style={[styles.itemText, textStyle, { color: themes[theme].sidemenuTintColor }]}
              numberOfLines={2}
              ellipsizeMode={'tail'}>
              {text}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  ),
)

export default Item
