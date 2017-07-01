import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NativeRouter, Route} from "react-router-native";
import {Achievements, Create, Friends, Home, Menu, Splash} from "./index";

export const AchieveMe = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" exact component={(props) => <Splash {...props} styles={styles.welcome} />} />
        <Route path="/" component={(props) => <Menu {...props} styles={styles.welcome} />} />
        <Route path="/home" component={(props) => <Home {...props} styles={styles.welcome} />} />
        <Route path="/create" component={(props) => <Create {...props} styles={styles.welcome} />} />
        <Route path="/friends" component={(props) => <Friends {...props} styles={styles.welcome} />} />
        <Route path="/list"
               component={(props) => <Achievements {...props} achievements={achievements} styles={styles.welcome} />} />
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
    backgroundColor: "#222"
  },
  welcome: {
    backgroundColor: "#600"
  }
});

const achievements = [
  {
    name: "Awesome breakfast",
    awardedBy: "Paul"
  },
  {
    name: "Defender of the Galaxy",
    awardedBy: "Alexander"
  },
  {
    name: "Collect 50 pairs of shoes",
    awardedBy: "Chris"
  },
  {
    name: "Godlike Father",
    awardedBy: "Marina"
  },
];
