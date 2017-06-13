import React from "react";
import {Text, View} from "react-native";
import {Link} from "react-router-native";

export const Home = ({styles}) => {
  return (
    <View style={styles}>
      <Text>Welcome to React Native!</Text>
      <Link to="create"><Text>Create</Text></Link>
      <Link to="invite"><Text>Invite</Text></Link>
    </View>
  );
};
