/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Input from './screens/Input';
import Game from './screens/Game';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Input"
          component={Input}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Game"
          component={Game}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
