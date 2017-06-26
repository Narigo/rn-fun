import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Text} from "./Text";
import {Link} from "react-router-native";

export const Create = () => {
  return (
    <ScrollView>
      <Link to="/list"><Text style={styles.bigger}>Back to Home</Text></Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bigger: {
    fontSize: 24
  }
});
