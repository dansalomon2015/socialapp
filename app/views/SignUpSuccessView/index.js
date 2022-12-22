import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {withTheme} from '../../theme';
import StatusBar from '../../containers/StatusBar';
import styles from './styles';
import images from '../../assets/images';
import {COLOR_WHITE} from '../../constants/colors';
import {openInbox} from 'react-native-email-link';

const SignUpSuccessView = props => {
  const {navigation} = props;

  //   Just to make then SignUp data screen accessible
  const _continue = () => {
    navigation.navigate('SignUpData');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <StatusBar />

      <View style={styles.main}>
        <Image source={images.email_verified} style={styles.image} />
        <Text style={styles.title} onPress={_continue}>
          Verify your Email Address
        </Text>
        <Text style={[styles.instruction, {marginTop: 14}]}>
          Thank you for your registration, before we move forward please verify
          your email address
        </Text>

        <Text style={[styles.instruction, {marginTop: 26}]}>
          View your email inbox
          <Text style={styles.emailInboxText} onPress={openInbox}>
            {' Email Inbox'}
          </Text>
        </Text>

        <Text style={[styles.instruction, styles.instruction_japanese]}>
          {'ご登録ありがとうございます。\n次に進む前にメールアドレスの確認を\nお願いいたします。'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(SignUpSuccessView);
