import React from "react";
import {Text} from "react-native";

export const Home = (props) => {
  console.log("props=", props);
  return (
    <Text style={props.styles}>
      Welcome to React Native!
    </Text>
  );
};
