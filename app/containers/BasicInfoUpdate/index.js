import {View, Text} from 'react-native';
import React from 'react';
import ProfileDataPlaceholder from '../ProfileDataPlaceholder';
import i18n from '../../i18n';

const BasicInfoUpdate = ({name, gender, dob, phone, location}) => {
  if (!name) return <ProfileDataPlaceholder title={i18n.t('update_basic_information')} />;

  return (
    <View>
      <Text> BasicInfoUpdate</Text>
    </View>
  );
};

export default BasicInfoUpdate;
