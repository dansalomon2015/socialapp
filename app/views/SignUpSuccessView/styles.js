import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_YELLOW, themes} from '../../constants/colors';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: height / 6,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  image: {
    height: 125,
    resizeMode: 'contain',
    marginBottom: 38,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 26,
    fontFamily: 'Raleway',
    textAlign: 'center',
    color: COLOR_BLACK,
  },
  instruction: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Raleway',
    textAlign: 'center',
    color: themes.light.textColor,
  },
  instruction_japanese: {
    marginTop: 40,
    lineHeight: 30,
  },
  emailInboxText: {
    color: COLOR_YELLOW,
    fontWeight: '500',
  },
});
