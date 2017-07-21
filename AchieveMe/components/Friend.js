import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "./";
import {subtleHighlightColor} from "../styles/variables";

export const Friend = ({details, name, setFriend}) => {
  if (details) {
    return (
      <View style={styles.active}>
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.inactive}>
        <TouchableOpacity onPress={setFriend}>
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
    fontSize: 24,
    padding: 5,
    textAlign: "center"
  }
});