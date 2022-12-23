import React from 'react';
import {StyleSheet} from 'react-native';
import ButtonAction from '../ButtonAction';
import i18n from '../../../i18n';

const UploadPhoto = () => {
  return (
    <>
      <ButtonAction title={i18n.t('Upload_Photo')} iconType="Entypo" iconName="images" />
    </>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({});
