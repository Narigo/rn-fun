import React from "react";
import {Divider, View, StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "./";
import {highlightColor, subtleHighlightColor} from "../styles/variables";

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
            <View style={styles.dividerScore} />
            <Text style={styles.score}>{score}</Text>
            <View style={styles.dividerScore} />
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
    backgroundColor: subtleHighlightColor
  },
  inactive: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40
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
    justifyContent: "center",
    marginBottom: 0
  },
  dividerScore: {
    flex: 1,
    backgroundColor: highlightColor,
    marginLeft: 5,
    marginRight: 5,
    height: StyleSheet.hairlineWidth
  },
  score: {
    fontSize: 8,
    color: "gold"
  }
});
