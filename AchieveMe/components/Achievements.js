import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Achievement, Text} from "./";
import {Link} from "react-router-native";

export const Achievements = ({achievements}) => {
  return (
    <ScrollView>
      {achievements.map((achievement, idx) => <Achievement key={idx} {...achievement} />)}
      <Link to="/home" style={styles.linkWrap}><Text style={styles.wrap}><Text style={styles.inner}>Back to Home</Text></Text></Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linkWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  wrap: {
    backgroundColor: "#0f0",
    margin: 5
  },
  inner: {
    color: "#000"
  }
});
