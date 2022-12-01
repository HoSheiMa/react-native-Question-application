import {Dimensions, StyleSheet} from 'react-native';

const GameStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  full_screen: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bg_purple: {
    backgroundColor: '#C51C1C',
  },
  white_color: {
    color: '#FFFFFF',
  },
  padding_40: {
    padding: 40,
  },
  upperWindow: {
    position: 'absolute',
    top: 0,
    width: '60%',
    left: '20%',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: '20%',
    fontFamily: 'Poppins',
  },
  question_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: '20%',
    fontFamily: 'Poppins',
  },
  margin_top: {
    marginTop: Dimensions.get('window').width * 0.1,
  },
  small_margin_top: {
    marginTop: '10%',
  },
  small_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#E43B3B',
    borderRadius: 12,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.65,
    height: 70,
  },
  input: {
    backgroundColor: '#E43B3B',
    borderRadius: 12,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.65,
    height: 70,
    fontSize: 18,
    paddingLeft: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#E43B3B',
    borderRadius: 12,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.18,
    marginLeft: 10,
    height: 70,
    color: '#fff',
  },
  big_font: {
    fontSize: 36,
  },
  Line: {
    backgroundColor: '#FFFFFF',
    height: 5,
    margin: 3,
    flex: 1,
    borderRadius: 12,
  },
  button_position: {
    width: Dimensions.get('window').width * 0.9,
    marginLeft: Dimensions.get('window').width * 0.05,
    top: -1 * Dimensions.get('window').width * 0.2,
  },
  arrow: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  arrow_start: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '900',
    padding: 10,
    width: 10,
  },
  arrow_end: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '900',
    padding: 10,
    width: 10,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  Image_cover: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
    zIndex: 999,
  },
  Image: {
    width: 50,
    height: 50,
  },
  Quit_cover: {
    position: 'absolute',
    width: 80,
    height: 50,
    left: 30,
    bottom: 30,
    zIndex: 999,
    backgroundColor: '#ee000040',
    borderRadius: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Quit: {
    fontSize: 21,
    color: '#fff',
  },
});
export default GameStyles;
