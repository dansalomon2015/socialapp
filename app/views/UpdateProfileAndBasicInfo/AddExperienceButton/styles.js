import {StyleSheet} from 'react-native';
import {COLOR_GRAY_DARK, themes} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.light.buttonBackground,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 9,
    borderRadius: 6,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Hind Vadodara',
    color: COLOR_GRAY_DARK,
  },
});
