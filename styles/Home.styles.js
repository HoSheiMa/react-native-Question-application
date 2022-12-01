import {Dimensions, StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  full_screen: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bg_purple: {
    backgroundColor: '#6E43FE',
  },
  row: {
    flexDirection: 'row',
  },
  space: {
    justifyContent: 'space-evenly',
  },
  paddingX: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',

    marginTop: '20%',
  },
  margin_top: {
    marginTop: '10%',
  },
  small_title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  flex: {
    flex: 1,
  },
  box: {
    backgroundColor: '#7D52FF',
    borderRadius: 12,
    marginTop: 10,
    width: '80%',
    minWidth: 300,
    height: 70,
  },
  small_icon: {
    width: 40,
    height: 40,
  },
});
export default HomeStyles;
