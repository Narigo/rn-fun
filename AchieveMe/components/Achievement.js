import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "./";

export const Achievement = ({name, awardedBy}) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.awardedBy}>{awardedBy}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24
  },
  awardedBy: {
    fontSize: 16
  }
});