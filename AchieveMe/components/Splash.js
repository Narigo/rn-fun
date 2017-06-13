import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Link} from "react-router-native";

export const Splash = () => (
  <Link to="/achieveme/list">
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
  titleFirst: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff"
  },
  titleSecond: {
    fontSize: 32,
    color: "#fff"
  },
  small: {
    fontSize: 12,
    color: "#666"
  }
});