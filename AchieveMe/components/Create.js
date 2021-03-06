import React from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import {Text} from "./";
import {Link} from "react-router-native";

export const Create = () => {
  return (
    <View>
      <View>
        <Text>Logo</Text>
        <Link to="/list"><Text>Back</Text></Link>
      </View>
      <ScrollView>
        <Text>Friend A</Text>
        <Text>Friend B</Text>
        <Text>Friend C</Text>
        <Text>Friend D</Text>
        <Text>Friend E</Text>
        <Text>Friend F</Text>
        <Text>Friend G</Text>
        <Text>Friend H</Text>
        <Text>Friend I</Text>
        <Text>Friend J</Text>
        <Text>Friend K</Text>
        <Text>Friend L</Text>
        <Text>Friend M</Text>
        <Text>Friend N</Text>
        <Text>Friend O</Text>
        <Text>Friend P</Text>
        <Text>Friend Q</Text>
        <Text>Friend R</Text>
        <Text>Friend S</Text>
        <Text>Friend T</Text>
        <Text>Friend U</Text>
        <Text>Friend V</Text>
        <Text>Friend W</Text>
        <Text>Friend X</Text>
        <Text>Friend Y</Text>
        <Text>Friend Z</Text>
      </ScrollView>
    </View>
  );
};
