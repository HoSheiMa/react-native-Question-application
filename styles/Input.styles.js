import {Dimensions, StyleSheet} from 'react-native';

const InputStyles = StyleSheet.create({
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
  padding_10: {
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',

    marginTop: '20%',
  },
  margin_top: {
    marginTop: '10%',
  },
  small_margin_top: {
    marginTop: 6,
  },
  small_title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',
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
    width: '65%',
    height: 70,
  },
  input: {
    backgroundColor: '#E43B3B',
    borderRadius: 12,
    marginTop: 10,
    width: '65%',
    height: 70,
    fontSize: 18,
    paddingLeft: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#E43B3B',
    borderRadius: 12,
    marginTop: 10,
    width: '18%',
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
    width: '90%',
    marginLeft: '5%',
    top: '-5%',
  },
});
export default InputStyles;
