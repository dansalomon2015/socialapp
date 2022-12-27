import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CsSelectGender from '../../../containers/CsSelectGender';
import CsAutocompleteSelect from '../../../containers/CsAutocompleteSelect';
import FloatingTextInput from '../../../containers/FloatingTextInput';

import styles from './style';
import Button from '../../../containers/Button';
import ExDatePicker from '../../../containers/ExDatePicker';
import i18n from '../../../i18n';
import ModalView from '../../../containers/ModalView';
import {COLOR_RED, themes} from '../../../constants/colors';

const theme = 'light';

const BasicInfoModal = ({isVisible, close, onUpdate}) => {
  const [displayName, setDisplayName] = useState('');
  const [gender, setGender] = useState('male');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const [nameError, setNameError] = useState('');
  const [dobError, setDobError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [cityError, setCityError] = useState('');

  const isValid = () => {
    setNameError('');
    setDobError('');
    setPhoneError('');
    setCityError('');

    if (!displayName.length) {
      setNameError(i18n.t('please_enter_name'));

      return false;
    }

    if (!city.length) {
      setCityError(i18n.t('please_enter_city'));
      return false;
    }

    if (!phone.length) {
      setPhoneError(i18n.t('please_enter_phone'));
      return false;
    }

    if (!birthday.length) {
      setDobError(i18n.t('please_select_birthday'));
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (isValid()) {
      onUpdate({
        displayName,
        phone,
        birthday,
        city,
        gender,
      });
      close();
    }
  };

  return (
    <ModalView isShow={isVisible} onClose={close} theme="light" title={i18n.t('update_basic_information')}>
      <View style={{marginBottom: 30}}>
        <Text style={styles.descriptionText}>
          Thank you for your registration, before we move forward please verify your email address
        </Text>
        <FloatingTextInput
          //   inputRef={nameInput}
          value={displayName}
          returnKeyType="next"
          keyboardType="default"
          label={i18n.t('Name')}
          placeholder={'Enter Your name'}
          onChangeText={name => setDisplayName(name)}
          theme={theme}
          error={nameError}
        />
        <CsSelectGender
          label="Select Your Gender"
          theme={theme}
          onChange={value => setGender(value)}
          value={gender}
          itemStyle={{borderColor: themes[theme].borderColor}}
        />
        {/* <CsAutocompleteSelect
          theme={theme}
          placeholder={'Select city'}
          label="City"
          containerStyle={{borderColor: cityError ? COLOR_RED : themes[theme].borderColor}}
          onSelectItem={item => {
            if (item) setCity(item.title);
          }}
          data={[
            {id: 1, title: 'Hon Kong'},
            {id: 2, title: 'New York'},
          ]}
        /> */}
        <FloatingTextInput
          //   inputRef={nameInput}
          value={city}
          returnKeyType="next"
          keyboardType="default"
          label={i18n.t('City')}
          placeholder={i18n.t('please_enter_city')}
          onChangeText={name => setCity(name)}
          theme={theme}
          error={cityError}
        />
        <FloatingTextInput
          //   inputRef={nameInput}
          value={phone}
          returnKeyType="next"
          keyboardType="default"
          label={i18n.t('Phone_number')}
          placeholder={i18n.t('please_enter_phone')}
          onChangeText={phone => setPhone(phone)}
          theme={theme}
          error={phoneError}
        />
        <ExDatePicker
          theme={theme}
          placeholder={i18n.t('please_select_birthday')}
          value={birthday}
          action={({value}) => {
            if (!value) {
              return;
            }
            setBirthday(value);
          }}
          label="Date of birth"
          containerStyle={{borderColor: dobError ? COLOR_RED : themes[theme].borderColor}}
        />
        <Button
          style={styles.submitBtn}
          title={i18n.t('update')}
          size="W"
          onPress={onSubmit}
          testID="login-submit"
          //   loading={isLoading}
          theme={theme}
          pressingHighlight
        />
      </View>
    </ModalView>
  );
};

export default BasicInfoModal;
