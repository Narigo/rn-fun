/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {NativeRouter, Route} from "react-router-native";
import {Home, First, Second} from "./components/index";

export default class AchieveMe extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route path="/" exact component={Home} styles={styles.welcome} />
          <Route path="/first" component={First} styles={styles.welcome} />
          <Route path="/second" component={Second} styles={styles.welcome} />
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AchieveMe', () => AchieveMe);
