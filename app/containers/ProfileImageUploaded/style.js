import {Dimensions, StyleSheet} from 'react-native';
import {themes} from '../../constants/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 89,
    paddingLeft: 17,
    // borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.6,

    elevation: 5,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  imageNameContainer: {
    marginLeft: 13,
    flex: 1,
  },
  imageName: {
    fontWeight: '500',
    fontFamily: 'Hind Vadodara',
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 22,
  },
  uploadNewImageText: {
    fontFamily: 'Raleway',
    fontSize: 12,
    marginLeft: 6,
    fontWeight: '600',
    color: themes.light.textColor,
  },
  uploadIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
