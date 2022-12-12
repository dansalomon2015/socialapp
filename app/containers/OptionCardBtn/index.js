import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './style'
import { themes } from '../../constants/colors'
import { VectorIcon } from '../VectorIcon'

const theme = 'light'

const OptionCardBtn = ({ image, title, smallText, rightIcon, rightIconName }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: themes[theme].optionButtonBackground } ]}>
      <Image source={image} style={styles.image} />
      <View style={styles.textsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.smallText}>{smallText}</Text>
      </View>
      {
        rightIcon
        &&
        <VectorIcon type='Entypo' size={16} style={styles.rightIcon} name={rightIconName} />
      }
    </TouchableOpacity>
  );
}

export default OptionCardBtn