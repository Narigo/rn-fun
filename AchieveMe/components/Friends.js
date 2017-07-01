import React from "react";
import {ScrollView} from "react-native";
import {Friend, Text} from "./";
import {Link} from "react-router-native";

export const Friends = ({friends}) => {
  return (
    <ScrollView>
      {friends.map((friend, idx) => <Friend key={idx} {...friend} />)}
      <Link to="/list"><Text>Back to Home</Text></Link>
    </ScrollView>
  );
};
