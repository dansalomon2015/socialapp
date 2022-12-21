import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BottomSheet from '../BottomSheet';
import {styles} from './styles';

const AddExperienceButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => setModalVisible(true)}>
        <Text style={styles.title}>AddExperienceButton</Text>
      </TouchableOpacity>

      <BottomSheet visible={modalVisible} close={() => setModalVisible(false)} />
    </>
  );
};

export default AddExperienceButton;
