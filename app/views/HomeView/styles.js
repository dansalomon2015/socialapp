import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabContainer: {
    width: '33%',
  },
  tabLabel: {
    textAlign: 'center',
    paddingVertical: 12,
  },
  addMeetupBtn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    zIndex: 10,
  },
  addImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  homeLogo: {
    width: 73,
    height: 44,
    resizeMode: 'contain',
  },
  postUserList: {
    paddingVertical: 20,
    paddingLeft: 15,
  },
  postUser: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#5790DF',
    padding: 2,
  },
  postUserAvatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  postUserName: {
    fontWeight: '600',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
  },
  followingAndForYouContainer: {
    width: '100%',
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 90,
    borderBottomWidth: 0.2,
    borderColor: '#ccc',
    marginTop: 10,
    marginBottom: 20
  },
  followingAndForYouText: {
    fontWeight: '500',
    color: '#2F3131',
    fontSize: 14,
    fontFamily: 'Raleway',
  },
  belowLine: {
    position: 'absolute',
    bottom: 0,
    height: 1.5,
  },
  textContainer: {
    justifyContent: 'center',
  }
});
