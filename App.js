import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/page/Home';
import Profile from './src/page/Profile/Index';

const App = () => {
  return (
    <View>
      <Home />
      <Profile />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
