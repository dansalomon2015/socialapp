import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ProfileDataPlaceholder from '../ProfileDataPlaceholder';
import i18n from '../../i18n';
import BasicInfoModal from '../../views/UpdateProfileAndBasicInfo/BasicInfoModal';
import BasicInfoUploaded from '../BasicInfoUploaded';

const BasicInfoUpdate = ({userInfo, onUpdate}) => {
  const {displayName, gender, birthday, phone, city} = userInfo;
  const [modalVisible, setModalVisible] = useState(false);

  if (!displayName)
    return (
      <>
        <ProfileDataPlaceholder
          title={i18n.t('update_basic_information')}
          onPress={() => setModalVisible(true)}
        />
        <BasicInfoModal isVisible={modalVisible} close={() => setModalVisible(false)} onUpdate={onUpdate} />
      </>
    );

  return (
    <BasicInfoUploaded
      name={userInfo.displayName}
      gender={gender}
      dob={birthday}
      phone={phone}
      location={city}
    />
  );
};

export default BasicInfoUpdate;
