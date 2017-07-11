import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "./";
import {Link} from "react-router-native";
import {highlightColor} from "../styles/variables";

export const Splash = () => (
  <Link to="/list">
    <View style={styles.screen}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.title}>
        <Text style={styles.titleFirst}>achieve</Text>
        <Text style={styles.titleSecond}>me</Text>
      </Text>
      <Text style={styles.small}>honor feels good.</Text>
    </View>
  </Link>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginBottom: 25
  },
  title: {
    fontSize: 32
  },
  titleFirst: {
    fontWeight: "bold"
  },
  titleSecond: {},
  small: {
    fontSize: 12,
    color: highlightColor
  }
});
