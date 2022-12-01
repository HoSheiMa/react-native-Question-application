import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import Categorys from '../api/category';
import HomeStyles from '../styles/Home.styles';
import Orientation from 'react-native-orientation-locker';

export default class Home extends Component {
  state = {
    Categorys: [],
  };
  async componentDidMount() {
    Orientation.lockToPortrait();
    this.setState({Categorys: await Categorys()});
  }

  render() {
    return (
      <SafeAreaView style={[HomeStyles.full_screen]}>
        <View
          style={[
            HomeStyles.bg_purple,
            HomeStyles.flex,
            HomeStyles.full_screen,
          ]}>
          <Text style={[HomeStyles.title]}>SØRPEFULL</Text>
          <View style={[HomeStyles.row, HomeStyles.center]}>
            <Image
              style={[HomeStyles.small_icon]}
              source={require('../assets/icone/NoPath–Kopi(2).png')}
            />
            <Image
              style={[HomeStyles.small_icon]}
              source={require('../assets/icone/NoPath.png')}
            />

            <Image
              style={[HomeStyles.small_icon]}
              source={require('../assets/icone/NoPath–Kopi.png')}
            />
          </View>
          <Text style={[HomeStyles.small_title, HomeStyles.margin_top]}>
            VELG KATEGORI
          </Text>
          <ScrollView style={[HomeStyles.flex]}>
            <View
              style={[
                HomeStyles.center,
                HomeStyles.flex,
                HomeStyles.margin_top,
              ]}>
              {this.state.Categorys.map((row, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={[HomeStyles.flex]}
                    onPress={() =>
                      this.props.navigation.replace('Input', {
                        Category: row.category,
                      })
                    }>
                    <View
                      style={[
                        HomeStyles.box,
                        HomeStyles.row,
                        HomeStyles.space,
                        HomeStyles.paddingX,
                        HomeStyles.center,
                      ]}>
                      <Image
                        style={[HomeStyles.small_icon, {flex: 1}]}
                        source={{uri: row.link}}
                      />
                      <Text style={[HomeStyles.small_title, {flex: 6}]}>
                        {row.category}
                      </Text>
                      <Image
                        style={[HomeStyles.small_icon, {flex: 1}]}
                        source={{uri: row.link}}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
