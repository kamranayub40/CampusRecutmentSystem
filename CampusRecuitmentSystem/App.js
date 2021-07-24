/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import Provider from './Src/Config/Auth'
import Provider from './Src/Config/index'

const App=() => {
  return (
    <>
     {/* <Text>Hello world</Text> */}
    <Provider/>
    </>
  );
};




export default App;
