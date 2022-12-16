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
  ({ id, left, text, onPress, textStyle, theme, hasRight }) => {
    return (
      <TouchableOpacity
        key={id}
        onPress={onPress}
        style={[styles.container, {
          backgroundColor: themes[theme].focusedBackground,
        }]}>
        <View style={styles.item}>
          {left && (<View style={styles.itemLeft}>{left}</View>)}
          <View style={styles.itemCenter}>
            <Text style={[styles.itemText, textStyle, { color: themes[theme].titleColor }]}>
              {text}
            </Text>
          </View>
        </View>
        {hasRight && (<VectorIcon
          type="Entypo" name="chevron-small-right" size={28} color={themes[theme].titleColor}
          style={styles.chevronIcon} />)
        }

      </TouchableOpacity>
    )
  },
)

export default Item
