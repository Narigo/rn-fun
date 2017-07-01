import React from "react";
import {View} from "react-native";
import {Text} from "./Text";
import {Link} from "react-router-native";

export const Home = ({styles}) => {
  return (
    <View style={styles}>
      <Text>Welcome to React Native!</Text>
      <Link to="/create"><Text>Create</Text></Link>
      <Link to="/friends"><Text>Invite</Text></Link>
    </View>
  );
};
