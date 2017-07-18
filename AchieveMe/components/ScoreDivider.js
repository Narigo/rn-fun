import React from "react";
import {Divider, View, StyleSheet} from "react-native";
import {Text} from "./";
import {highlightColor} from "../styles/variables";

export const ScoreDivider = ({score}) => (
  <View style={styles.scoreContainer}>
    <View style={styles.dividerScore} />
    <Text style={styles.score}>{score}</Text>
    <View style={styles.dividerScore} />
  </View>
);

const styles = StyleSheet.create({
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
