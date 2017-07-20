import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NativeRouter, Route} from "react-router-native";
import {Achievements, Create, Friends, Home, Menu, Splash} from "./";
import {push} from "react-router-native";

export const AchieveMe = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" exact component={(props) => <Splash {...props} styles={styles.welcome} />} />
        <Route path="/" component={(props) => <Menu {...props} styles={styles.welcome} />} />
        <Route path="/home" component={(props) => <Home {...props} styles={styles.welcome} />} />
        <Route path="/create" component={(props) => <Create {...props} styles={styles.welcome} />} />
        <Route
          path="/friends"
          component={(props) => <Friends {...props} friends={friends} styles={styles.welcome} />}
        />
        <Route
          path="/list"
          component={(props) =>
            <Achievements
              {...props}
              setAchievement={setAchievement(props.history)}
              achievements={achievements}
              styles={styles.welcome}
            />}
        />
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
    awardedBy: "Paul",
    score: getRandomScore()
  },
  {
    name: "Defender of the Galaxy",
    awardedBy: "Alexander",
    score: getRandomScore()
  },
  {
    name: "Collect 50 pairs of shoes",
    awardedBy: "Chris",
    score: getRandomScore()
  },
  {
    name: "Godlike Father",
    awardedBy: "Marina",
    score: getRandomScore()
  },
];

const friends = [
  {active: false, name: "Paul"},
  {active: false, name: "Alexander"},
  {active: true, name: "Chris"},
  {active: false, name: "Marina"},
  {active: false, name: "Peter"},
  {active: false, name: "Xombie"},
  {active: false, name: "Sapphire2031"},
  {active: false, name: "Galaxydefender"}
];

function getRandomScore() {
  return Math.floor(Math.random() * 5000);
}

const setAchievement = history => number => {
  for (let i = 0; i < achievements.length; i++) {
    achievements[i].details = number === i;
  }
  history.push("/list");
};
