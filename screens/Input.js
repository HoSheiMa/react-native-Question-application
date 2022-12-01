import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import InputStyles from '../styles/Input.styles';
import {AsyncStorage} from 'react-native';
import Orientation from 'react-native-orientation-locker';

export default class Input extends Component {
  state = {
    Category: this.props.route.params.Category,
    inp: '',
    names: [],
  };
  getStoredName = async () => {
    let store_sections = await AsyncStorage.getItem('sections');
    console.log('store_sections', store_sections);
    store_sections = store_sections ? JSON.parse(store_sections) : [];
    let stored = [];
    for (let i in store_sections) {
      if (store_sections[i].Category === this.state.Category) {
        stored = store_sections[i].names;
      }
    }
    return stored;
  };
  async componentDidMount() {
    let names;
    let stored_names = await this.getStoredName();
    if (this.props.route.params.names) {
      names = this.props.route.params.names;
    } else if (stored_names) {
      names = stored_names;
    } else {
      names = [];
    }
    this.setState({
      names: names,
    });
    Orientation.lockToPortrait();
  }
  insert = () => {
    this.setState({names: [...this.state.names, this.state.inp], inp: ''});
  };
  remove = index => {
    this.state.names.splice(index, 1);
    this.setState({names: [...this.state.names]});
  };
  render() {
    console.log('this.props.route.params.names', this.props.route.params.names);
    return (
      <SafeAreaView style={[InputStyles.full_screen]}>
        <View style={[InputStyles.bg_purple, InputStyles.full_screen]}>
          <Text style={[InputStyles.title]}>LEGG TIL DELTAGERE</Text>
          <View
            style={[
              InputStyles.row,
              InputStyles.center,
              InputStyles.margin_top,
            ]}>
            <TextInput
              value={this.state.inp}
              style={[InputStyles.input]}
              placeholder="NAVN..."
              placeholderTextColor="#fff"
              onChange={evt => this.setState({inp: evt.nativeEvent.text})}
            />
            <TouchableOpacity
              onPress={this.insert}
              style={[InputStyles.button, InputStyles.center]}>
              <Text style={[InputStyles.white_color, InputStyles.big_font]}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              InputStyles.row,
              InputStyles.center,
              InputStyles.margin_top,
              InputStyles.padding_10,
            ]}>
            <View style={[InputStyles.Line, {flex: 1}]} />
            <View style={[InputStyles.Line, {flex: 1.2}]} />
            <View style={[InputStyles.Line, {flex: 6}]} />
            <View style={[InputStyles.Line, {flex: 1.2}]} />
            <View style={[InputStyles.Line, {flex: 1}]} />
          </View>
          <ScrollView>
            <View style={[InputStyles.center, InputStyles.small_margin_top]}>
              {this.state.names.map((row, i) => {
                console.log('row', row);
                return (
                  <View
                    key={i}
                    style={[
                      InputStyles.row,
                      InputStyles.center,
                      InputStyles.small_margin_top,
                    ]}>
                    <View style={[InputStyles.box, InputStyles.center]}>
                      <Text style={[InputStyles.small_title]}>{row}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.remove(i)}
                      style={[InputStyles.button, InputStyles.center]}>
                      <Text
                        style={[InputStyles.white_color, InputStyles.big_font]}>
                        -
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              if (this.state.names.length === 0) {
                return;
              }
              AsyncStorage.setItem(
                'sections',
                JSON.stringify([
                  {
                    Category: this.state.Category,
                    names: this.state.names,
                  },
                ]),
              );
              this.props.navigation.replace('Game', {
                Category: this.state.Category,
                names: this.state.names,
                ...(() => {
                  return this.props.route.params.Questions
                    ? {
                        Questions: this.props.route.params.Questions,
                        index: this.props.route.params.index,
                      }
                    : {};
                })(),
              });
            }}
            style={[
              InputStyles.button,
              InputStyles.center,
              InputStyles.button_position,
            ]}>
            <Text style={[InputStyles.white_color, InputStyles.big_font]}>
              start
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
