import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route} from "react-router-native";
import {Achievements, Home, Menu, Splash} from "./index";

export const AchieveMe = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" exact component={Splash} styles={styles.welcome} />
        <Route path="/achieveme/" component={Menu} styles={styles.welcome} />
        <Route path="/achieveme/list" component={Home} styles={styles.welcome} />
        <Route path="/achieveme/create" component={Achievements} styles={styles.welcome} />
        <Route path="/achieveme/invite" component={Achievements} styles={styles.welcome} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  }
});
