import React from 'react';
import {StyleSheet} from 'react-native';
import ButtonAction from '../ButtonAction';
import i18n from '../../../i18n';

const Capture = () => {
  return (
    <>
      <ButtonAction title={i18n.t('Capture')} iconType="MaterialCommunityIcons" iconName="camera" />
    </>
  );
};

export default Capture;

const styles = StyleSheet.create({});
