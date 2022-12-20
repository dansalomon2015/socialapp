import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import i18n from '../../i18n';
import {VectorIcon} from '../VectorIcon';
import {COLOR_LIGHT_DARK} from '../../constants/colors';
import {styles} from './styles';

const ProfileDataPlaceholder = ({title, onPress}) => {
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
