import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NativeRouter, Route} from "react-router-native";
import {Achievements, Home, Menu, Splash} from "./index";

export const AchieveMe = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" exact component={(props) => <Splash {...props} styles={styles.welcome} />} />
        <Route path="/achieveme/" component={(props) => <Menu {...props} styles={styles.welcome} />} />
        <Route path="/achieveme/list" component={(props) => <Home {...props} styles={styles.welcome} />} />
        <Route path="/achieveme/create" component={(props) => <Achievements {...props} styles={styles.welcome} />} />
        <Route path="/achieveme/invite" component={(props) => <Achievements {...props} styles={styles.welcome} />} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  welcome: {
    backgroundColor: "#600"
  }
});
