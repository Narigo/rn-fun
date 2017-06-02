import React from "react";
import {Text} from "react-native";
import {Link} from "react-router-native";

export const Second = ({styles}) => (
  <Link to="/">
    <Text style={styles}>
      Welcome to Second
    </Text>
  </Link>
);
