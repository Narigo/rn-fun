import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "./";

export const Achievement = ({awardedBy, details, name, score}) => {
  if (details) {
    return (
      <View>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.awardedBy}>honored by {awardedBy}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24
  },
  awardedBy: {
    fontSize: 16
  },
  score: {
    fontSize: 8,
    color: "gold"
  }
});
