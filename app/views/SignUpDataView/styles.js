import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_YELLOW, themes} from '../../constants/colors';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  body: {
    flex: 1,
    paddingTop: 30,
  },
  logo: {
    height: 65,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'Raleway',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Raleway',
    textAlign: 'center',
    color: themes.light.textColor,
    marginBottom: 48,
  },
  updateExperienceText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 5,
    fontFamily: 'Raleway',
    lineHeight: 15,
    marginVertical: 15,
  },
  footer: {
    paddingVertical: 13,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  radioIcon: {
    marginRight: 10,
  },
  privacy_container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  privacy: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Raleway',
    color: themes.light.textColor,
    flexShrink: 1,
  },
});
