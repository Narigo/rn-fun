import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const Menu = () => (
  <View style={styles.openMenu}>
    <Text style={styles.text}>Menu</Text>
  </View>
);

const styles = StyleSheet.create({
  openMenu: {
    backgroundColor: "#666"
  },
  text: {
    fontSize: 18,
    color: "#fff"
  }
});
