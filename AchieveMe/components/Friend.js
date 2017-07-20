import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "./";
import {subtleHighlightColor} from "../styles/variables";

export const Friend = ({name}) => {
  return (
    <View style={active ? styles.active : styles.inactive}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
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
    fontSize: 24,
    padding: 5,
    textAlign: "center"
  }
});