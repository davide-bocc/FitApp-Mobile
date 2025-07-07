import { AppRegistry } from 'react-native';
import { Text, View } from 'react-native';
import React from 'react';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>FitApp Mobile is running!</Text>
  </View>
);

AppRegistry.registerComponent('FitAppMobile', () => App);
