import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '99%',
    height: 66,
    borderRadius: 6,
    flexDirection: 'row',
    paddingLeft: 10,
    marginVertical: 5,
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 43.22,
  },
  textsContainer: {
    marginLeft: 14,
  },
  title: {
    fontFamily: 'Hind Vadodara',
    fontWeight: '600',
    fontSize: 16,
  },
  smallText: {
    fontFamily: 'Raleway',
    fontSize: 10,
  },
  rightIcon: {
    position: 'absolute',
    right: 14,
    alignSelf: 'center'
  }
});

export default styles;