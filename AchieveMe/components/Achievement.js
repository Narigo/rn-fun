import React from "react";
import {Divider, View, StyleSheet, TouchableOpacity} from "react-native";
import {ScoreDivider, Text} from "./";
import {subtleHighlightColor} from "../styles/variables";

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
          <ScoreDivider score={score} />
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
  }
});
