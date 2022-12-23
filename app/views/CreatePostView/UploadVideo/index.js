import React from 'react';
import {StyleSheet} from 'react-native';
import ButtonAction from '../ButtonAction';
import i18n from '../../../i18n';

const UploadVideo = () => {
  return (
    <>
      <ButtonAction
        title={i18n.t('video')}
        iconType="MaterialCommunityIcons"
        iconName="video"
        iconSize={24}
      />
    </>
  );
};

export default UploadVideo;

const styles = StyleSheet.create({});
