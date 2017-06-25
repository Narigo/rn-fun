import React from "react";
import {ScrollView} from "react-native";
import {Text} from "./Text";
import {Link} from "react-router-native";

export const Create = () => {
  return (
    <ScrollView>
      <Link to="/list"><Text>Back to Home</Text></Link>
    </ScrollView>
  );
};
