import { StyleSheet, Dimensions } from 'react-native';
import { isIOS } from '../../utils/deviceInfo';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  profileContainer: {
    height: isIOS ? 140 : 100,
  },
  profileInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: width * 0.5,
    height: 55,
    alignSelf: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 220,
    height: 90,
    resizeMode: 'contain',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
  },
  profileName: {
    marginLeft: 12,
    fontSize: 16,
  },
  roleName: {
    marginLeft: 12,
    fontSize: 10,
    marginTop: 3,
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 24,
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
  },
  itemLeft: {
    marginRight: 10,
    width: 30,
    alignItems: 'center',
  },
  itemCenter: {
    marginRight: 0,
  },
  itemText: {
    marginVertical: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemsRight: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'white',
  },
  logoutContainer: {
    height: 70,
    paddingTop: 5,
  },
  logoutInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
    textAlign: 'center',
    height: 65,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '92%',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignSelf: 'center',
    borderRadius: 6,
    position: 'absolute',
    bottom: 75
  },
  logoutText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
  },
  logoutIcon: {
    width: 26,
    height: 26,
    marginRight: 8,
    tintColor: '#C4C4C4'
  },
  closeIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 10,
    right: 26,
  },
  closeIcon: {
    marginRight: 8,
  },
  menuText: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 22,
    marginBottom: 13
  },
  bottomView: {
    width: '100%',
    height: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 40
  },
  privacyTermsEulaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '65%',
    justifyContent: 'space-between',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '30%',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 12
  },
  languageText:{
    fontFamily: 'Hind Vadodara',
    fontWeight: '600',
    fontSize: 12,
  },
  chevronIcon: {
    position: 'absolute',
    right: 10,
    top: 10
  }
});
