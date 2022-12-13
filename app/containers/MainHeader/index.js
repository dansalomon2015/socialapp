import React, { useRef, useState } from 'react'
import { View, Text, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper';

import styles from './style'
import { useTheme } from '../../theme'
import images from '../../assets/images'
import { VectorIcon } from '../VectorIcon'
import { useNavigation } from '@react-navigation/native';

const MainHeader = ({
  avatarImage,
  onChangeText,
  ...otherInputProps
}) => {
  const {theme} = useTheme();

  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const inputRef = useRef();
  const navigation = useNavigation()

  const focusInput = () => {
    setShowSearchIcon(false);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const clearInputFocus = () => {
      inputRef.current.clear();
      setTimeout(() => {
        setShowSearchIcon(true);
    }, 100);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={
            theme == 'light' ? images.menu_icon_dark : images.menu_icon_light
          }
        />
      </TouchableOpacity>
      {showSearchIcon ? (
        <Pressable style={styles.searchAndInput} onPress={focusInput}>
          <VectorIcon type="Ionicons" name="search" color="#828282" size={18} />
          <Text style={styles.searchHereText}>Search Here</Text>
        </Pressable>
      ) : (
        <>
          <TextInput
            ref={inputRef}
            style={styles.input}
            onChangeText={onChangeText}
            {...otherInputProps}
            placeholderTextColor="#828282"
            onFocus={() => setShowSearchIcon(false)}
          />
          <VectorIcon
            type="AntDesign"
            name="close"
            color="#828282"
            style={styles.closeIcon}
            onPress={clearInputFocus}
            size={18}
          />
        </>
      )}
      <Avatar.Image
        source={avatarImage.length > 0 ? avatarImage : images.default_avatar}
        style={styles.avatarImage}
        size={33}
      />
    </View>
  );
};

export default MainHeader