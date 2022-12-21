import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View, ScrollView} from 'react-native';
import {withTheme} from '../../theme';
import StatusBar from '../../containers/StatusBar';
import styles from './styles';
import images from '../../assets/images';
import {COLOR_LIGHT_DARK, COLOR_WHITE, COLOR_YELLOW} from '../../constants/colors';
import Button from '../../containers/Button';
import i18n from '../../i18n';
import ProfileImageUpload from '../../containers/ProfileImageUpload';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import BasicInfoUpdate from '../../containers/BasicInfoUpdate';
import AddExperienceButton from '../../containers/AddExperienceButton';
import {VectorIcon} from '../../containers/VectorIcon';
import I18n from 'i18n-js';

const SignUpDataView = () => {
  const [profileImage, setProfileImage] = useState({
    imageName: '',
    imageUrl: '',
  });

  const [agreedPolicy, setAgreedPolicy] = useState(false);

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

            <Text style={styles.updateExperienceText}>{i18n.t('update_experience')}</Text>

            <AddExperienceButton />

            <Text style={styles.updateExperienceText}>{i18n.t('others')}</Text>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.privacy_container}>
            <VectorIcon
              type="MaterialCommunityIcons"
              name={agreedPolicy ? 'radiobox-marked' : 'radiobox-blank'}
              size={18}
              color={agreedPolicy ? COLOR_YELLOW : COLOR_LIGHT_DARK}
              style={styles.radioIcon}
              onPress={() => setAgreedPolicy(b => !b)}
            />
            <Text style={styles.privacy}>
              <Text style={{fontWeight: '400'}}>{I18n.t('agree_with')}</Text>{' '}
              <Text style={{color: COLOR_YELLOW}}>{I18n.t('Terms_and_conditions')} </Text>
              <Text style={{fontWeight: '400'}}>{i18n.t('and')} </Text>{' '}
              <Text style={{color: COLOR_YELLOW}}>{I18n.t('Privacy_policy')}</Text>
            </Text>
          </View>
          <Button title={i18n.t('confirm_and_create_an_account')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(SignUpDataView);
