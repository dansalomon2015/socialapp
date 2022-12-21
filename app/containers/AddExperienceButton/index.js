import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ModalView from '../ModalView';
import {styles} from './styles';

const AddExperienceButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => setModalVisible(true)}>
        <Text style={styles.title}>AddExperienceButton</Text>
      </TouchableOpacity>

      {/* <ModalView  /> */}
    </>
  );
};

export default AddExperienceButton;
