import React from "react";
import {Text} from "react-native";
import {Link} from "react-router-native";

export const Home = ({styles}) => (
  <Link to="/first">
    <Text style={styles}>
      Welcome to React Native!
    </Text>
  </Link>
);
