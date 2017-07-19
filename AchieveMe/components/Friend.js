import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "./";

export const Friend = ({name}) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    padding: 5,
    textAlign: "center"
  }
});