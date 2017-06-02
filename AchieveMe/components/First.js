import React from "react";
import {Text, View} from "react-native";
import {Link} from "react-router-native";

export const First = ({styles}) => (
  <View>
    <Text style={styles}>Welcome to </Text>
    <Link to="/second"><Text>First</Text></Link>
  </View>
);
