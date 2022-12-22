import {StyleSheet} from 'react-native';
import {COLOR_YELLOW, themes} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.light.buttonBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 9,
    borderRadius: 6,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Raleway',
  },
  upload_text: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 22,
    fontFamily: 'Raleway',
    color: COLOR_YELLOW,
  },
});
