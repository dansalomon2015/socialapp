import { StyleSheet } from 'react-native'
import { COLOR_WHITE, COLOR_YELLOW } from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  image: {
    maxWidth: '90%',
    height: 400,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    paddingVertical: 32,
    paddingHorizontal: 64,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  submitBtn: {
    marginBottom: 100,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activatedDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: COLOR_YELLOW,
    borderStyle: 'solid',
    backgroundColor: COLOR_YELLOW,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#605E5E',
    borderStyle: 'solid',
    backgroundColor: '#2B2D2E',
  },
})
