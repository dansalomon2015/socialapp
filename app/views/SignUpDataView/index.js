import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View, ScrollView} from 'react-native';
import {withTheme} from '../../theme';
import StatusBar from '../../containers/StatusBar';
import styles from './styles';
import images from '../../assets/images';
import {COLOR_WHITE} from '../../constants/colors';
import Button from '../../containers/Button';
import i18n from '../../i18n';
import ProfileImageUpload from '../../containers/ProfileImageUpload';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import BasicInfoUpdate from '../../containers/BasicInfoUpdate';

const SignUpDataView = () => {
  const [profileImage, setProfileImage] = useState({
    imageName: '',
    imageUrl: '',
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <StatusBar />
      <View style={styles.main}>
        <View style={styles.body}>
          <ScrollView style={{flex: 1, height: '100%'}} {...scrollPersistTaps} keyboardShouldPersistTaps="handled">
            <View style={styles.header}>
              <Image source={images.logo} style={styles.logo} />
              <Text style={styles.title}>{i18n.t('welcome_to_vip')}</Text>
              <Text style={styles.instruction}>{i18n.t('please_complete_these_steps_to_confirm')}</Text>
            </View>

            <ProfileImageUpload {...profileImage} onUpload={setProfileImage} />

            <BasicInfoUpdate />
          </ScrollView>
        </View>
        <View>
          <Button title={i18n.t('confirm_and_create_an_account')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(SignUpDataView);
