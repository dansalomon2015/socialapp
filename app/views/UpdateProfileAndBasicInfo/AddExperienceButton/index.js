import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ExperienceUploaded from '../../../containers/ExperienceUploaded';
import AddExperienceModal from '../AddExperienceModal';
import {styles} from './styles';

const AddExperienceButton = ({userInfo, onUpdate}) => {
  const {job, role, years_of_service, company, salary} = userInfo;
  const [modalVisible, setModalVisible] = useState(false);

  if (!job)
    return (
      <>
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => setModalVisible(true)}>
          <Text style={styles.title}>AddExperienceButton</Text>
        </TouchableOpacity>

        <AddExperienceModal
          isVisible={modalVisible}
          close={() => setModalVisible(false)}
          onUpdate={onUpdate}
        />
      </>
    );

  return (
    <ExperienceUploaded
      salary={salary}
      jobTitle={job}
      companyName={company}
      numberOfYears={years_of_service}
      showCloseIcon
      theme={'light'}
    />
  );
};

export default AddExperienceButton;
