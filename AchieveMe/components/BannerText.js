import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "./";
import {subtleHighlightColor} from "../styles/variables";

export const BannerText = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.wrap}>
        <Text style={styles.inner}>
          {children}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 250
  },
  wrap: {
    lineHeight: 25,
    textAlign: "center",
  },
  inner: {
    color: "#000",
    backgroundColor: subtleHighlightColor,
  }
});