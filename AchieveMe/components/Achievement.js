import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "./";

export const Achievement = ({awardedBy, details, name, score}) => {
  if (details) {
    return (
      <View style={styles.active}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.awardedBy}>honored by {awardedBy}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.inactive}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  active: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    backgroundColor: "#333"
  },
  inactive: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 100
  },
  name: {
    fontSize: 24
  },
  awardedBy: {
    fontSize: 10,
    color: "gold"
  },
  score: {
    fontSize: 8,
    color: "gold"
  }
});
