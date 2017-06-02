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
import {NativeRouter, Link, Route} from "react-router-native";

const Home = () => (
  <Link to="/first">
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
  </Link>
);

const First = () => (
  <View>
    <Text style={styles.welcome}>Welcome to </Text>
    <Link to="/second"><Text>First</Text></Link>
  </View>
);

const Second = () => (
  <Link to="/">
    <Text style={styles.welcome}>
      Welcome to Second
    </Text>
  </Link>
);

export default class AchieveMe extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route path="/" exact component={Home} />
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
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
