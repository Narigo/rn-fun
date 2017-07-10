import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "./";

export const Achievement = ({awardedBy, details, name, score, setAchievement}) => {
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
        <TouchableOpacity onPress={setAchievement}>
          <View style={styles.scoreContainer}>
            <Text style={styles.leftScore}>-</Text>
            <Text style={styles.score}>{score}</Text>
            <Text style={styles.rightScore}>-</Text>
          </View>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
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
  scoreContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  leftScore: {
    borderTopWidth: 5,
    borderTopColor: "#aaa",
  },
  rightScore: {
    borderTopWidth: 5,
    borderColor: "#aaa",
  },
  score: {
    fontSize: 8,
    color: "gold"
  }
});
