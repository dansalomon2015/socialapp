import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, Platform } from 'react-native'
import { TextInput } from 'react-native-paper'

import { COLOR_BORDER, themes } from '../constants/colors'
import images from '../assets/images'

const styles = StyleSheet.create({
  iconWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    height: 50,
    marginBottom: 3,
  },
  error: {
    fontFamily: 'Raleway',
    fontSize: 14,
    lineHeight: 16,
    color: '#E2665E',
  },
  container: {
    marginBottom: 14,
  },
  labelText: {
    fontFamily: 'Raleway',
  },
})

const FloatingTextInput = props => {
  const {
    label,
    required,
    error,
    loading,
    secureTextEntry,
    containerStyle,
    inputRef,
    iconLeft,
    iconRight,
    inputStyle,
    wrapStyle,
    testID,
    placeholder,
    theme,
    outlineColor,
    backgroundColor,
    multiline,
    value,
    ...inputProps
  } = props

  const [showPassword, setShowPassword] = useState(!secureTextEntry)

  const { dangerColor } = themes[theme]

  const leftIcon = () => {
    return (
      <View style={styles.iconWrap}>
        <Image
          source={iconLeft}
          testID={testID ? `${testID}-icon-left` : null}
          style={[styles.icon, { tintColor: themes[theme].infoText }]}
        />
      </View>
    )
  }

  const rightIcon = () => {
    if (error) {
      return (
        <View style={styles.iconWrap}>
          <Image
            source={images.error}
            testID={testID ? `${testID}-icon-error` : null}
            style={[styles.icon]}
          />
        </View>
      )
    }
    if (secureTextEntry) {
      return (
        <View style={styles.iconWrap}>
          <Image
            source={showPassword ? images.eye_show : images.eye_hidden}
            testID={testID ? `${testID}-icon-right` : null}
            style={[styles.icon, { tintColor: themes[theme].infoText }]}
          />
        </View>
      )
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        ref={inputRef}
        value={value}
        mode="outlined"
        style={[
          styles.textInput,
          {
            backgroundColor: backgroundColor ?? 'transparent',
            height: multiline ? 123 : 50,
            fontSize: Platform.OS === 'ios' ? 14 : 13,
            lineHeight: Platform.OS === 'ios' ? 14 : 14,
          },
        ]}
        outlineColor={error ? '#E2665E' : outlineColor || COLOR_BORDER}
        activeOutlineColor={error ? '#E2665E' : themes[theme].infoText}
        theme={{
          roundness: 8,
          borderWidth: 1,
          colors: {
            text: error ? '#E2665E' : themes[theme].activeTintColor,
            placeholder: themes[theme].placeholderColor,
          },
        }}
        multiline={multiline}
        secureTextEntry={!showPassword}
        placeholder={placeholder}
        placeholderTextColor="#858585"
        {...inputProps}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

FloatingTextInput.defaultProps = {
  error: '',
}

export default FloatingTextInput
