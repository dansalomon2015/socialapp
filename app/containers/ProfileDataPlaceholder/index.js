import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import i18n from '../../i18n';
import {VectorIcon} from '../VectorIcon';
import {COLOR_GRAY_DARK, COLOR_LIGHT_DARK} from '../../constants/colors';
import {styles} from './styles';

const ProfileDataPlaceholder = ({title, onPress, loading}) => {
  if (loading)
    return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <ActivityIndicator size={'small'} color={COLOR_GRAY_DARK} />
      </View>
    );

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
      <View style={styles.titleContainer}>
        <VectorIcon type="EvilIcons" name="check" size={32} color={COLOR_LIGHT_DARK} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.upload_text}>{i18n.t('upload_now')}</Text>
    </TouchableOpacity>
  );
};

export default ProfileDataPlaceholder;
