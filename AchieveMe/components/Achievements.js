import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Achievement, Text} from "./";
import {subtleHighlightColor} from "../styles/variables";
import {Link} from "react-router-native";

export const Achievements = ({achievements, setAchievement}) => {
  return (
    <ScrollView>
      {achievements.map((achievement, idx) => (
        <Achievement
          key={idx}
          setAchievement={() => setAchievement(idx)}
          {...achievement}
        />
      ))}
      <Link to="/home" style={styles.linkWrap}>
        <Text style={styles.wrap}>
          <Text style={styles.inner}>
            Back to Home with a very long text that hopefully breaks into the next line just
            to see how it behaves.
          </Text>
        </Text>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linkWrap: {
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
