import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import GameStyles from '../styles/Game.styles';
import Questions from '../api/quetions';
import RNExitApp from 'react-native-exit-app';

export default class Game extends Component {
  async componentDidMount() {
    if (this.props.route.params.names.length === 0) {
      this.props.navigation.replace('Input', {
        Category: this.props.route.params.Category,
      });
    }
    Orientation.lockToLandscape();
    if (this.props.route.params.Questions) {
      this.setState({
        Questions: this.props.route.params.Questions,
        index: this.props.route.params.index,
      });
    } else {
      this.setState({
        Questions: await Questions(this.props.route.params.Category),
      });
    }
  }
  state = {
    index: 0,
    Questions: [
      {
        title: 'Question Category...',
        body: 'Qestion...',
      },
      {
        title: 'Question Category...',
        body: 'Qestion...',
      },
      {
        title: 'Question Category...',
        body: 'Qestion...',
      },
    ],
  };
  next = () => {
    this.setState({
      index:
        this.state.index + 1 === this.state.Questions.length
          ? this.state.index
          : this.state.index + 1,
    });
  };
  prev = () => {
    this.setState({
      index: this.state.index === 0 ? 0 : this.state.index - 1,
    });
  };
  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  render() {
    if (this.state.Questions.length === this.state.index + 1) {
      this.props.navigation.replace('Home');
      return <View />;
    }
    let random_question = this.state.Questions[this.state.index];
    let color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    random_question.title = random_question.title
      .replaceAll('<p>', '')
      .replaceAll('</p>', '')
      .replaceAll(
        '{name}',
        this.props.route.params.names[
          Math.floor(Math.random() * this.props.route.params.names.length)
        ],
      );
    random_question.body = random_question.body
      .replaceAll('<p>', '')
      .replaceAll('</p>', '');

    while (random_question.body.includes('{name}')) {
      random_question.body = random_question.body.replace(
        '{name}',
        this.props.route.params.names[
          Math.floor(Math.random() * (this.props.route.params.names.length - 1))
        ],
      );
    }

    return (
      <View style={[GameStyles.full_screen, GameStyles.row]}>
        <TouchableOpacity
          onPress={this.prev}
          style={[
            GameStyles.arrow,

            GameStyles.padding_40,
            {
              backgroundColor: color,
            },
          ]}>
          <Image
            style={GameStyles.arrow_start}
            source={{
              uri: 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/asset1.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.next}
          style={[
            GameStyles.arrow,
            {
              alignItems: 'flex-end',
            },
            GameStyles.padding_40,
            {
              backgroundColor: color,
            },
          ]}>
          <Image
            style={GameStyles.arrow_end}
            source={{
              uri: 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/asset1.png',
            }}
          />
        </TouchableOpacity>
        <View style={[GameStyles.upperWindow, GameStyles.center]}>
          <Text style={[GameStyles.title, GameStyles.small_margin_top]}>
            {this.state.Questions.length === 0
              ? 'Question Category...'
              : random_question.title}
          </Text>
          <Text style={[GameStyles.question_text, GameStyles.small_margin_top]}>
            {this.state.Questions.length === 0
              ? 'Question...'
              : random_question.body}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.replace('Input', {
              Category: this.props.route.params.Category,
              names: this.props.route.params.names,
              Questions: this.state.Questions,
              index: this.state.index,
            })
          }
          style={[GameStyles.Image_cover]}>
          <Image
            source={require('../assets/icone/add_user.png')}
            style={GameStyles.Image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (!this.state.sure) {
              this.state.sure = true;
              setTimeout(() => {
                this.setState({
                  sure: false,
                });
              }, 1500);
              return;
            }

            this.props.navigation.replace('Home');
          }}
          style={[GameStyles.Quit_cover]}>
          <Text style={[GameStyles.Quit]}>Stopp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
