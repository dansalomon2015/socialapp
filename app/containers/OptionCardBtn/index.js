import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './style'
import { themes } from '../../constants/colors'
import { VectorIcon } from '../VectorIcon'
import { useTheme } from '../../theme'


const OptionCardBtn = ({ image, title, smallText, rightIcon, rightIconName }) => {

  const {theme} = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: themes[theme].optionButtonBackground},
      ]}>
      <Image source={image} style={styles.image} />
      <View style={styles.textsContainer}>
        <Text style={[styles.title, {color: themes[theme].activeTintColor}]}>
          {title}
        </Text>
        <Text
          style={[styles.smallText, {color: themes[theme].activeTintColor}]}>
          {smallText}
        </Text>
      </View>
      {rightIcon && (
        <VectorIcon
          type="Entypo"
          size={16}
          style={styles.rightIcon}
          name={rightIconName}
          color={themes[theme].activeTintColor}
        />
      )}
    </TouchableOpacity>
  );
}

export default OptionCardBtn