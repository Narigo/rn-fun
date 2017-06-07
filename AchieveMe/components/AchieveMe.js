import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from "react-router-native";
import {Achievements, Home, First, Second} from "./index";

export const AchieveMe = ({children}) => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" exact component={Home} styles={styles.welcome} />
        <Route path="/achievements" component={Achievements} styles={styles.welcome} />
        <Link to="/achievements">
          <Text style={styles.instructions}>To Achievements</Text>
        </Link>
        <Link to="/">
          <Text style={styles.instructions}>To Home</Text></Link>
        <Text style={styles.instructions}>
          {children}
        </Text>
      </View>
    </NativeRouter>
  );
};

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
