import React from "react";
import {ScrollView} from "react-native";
import {Achievement, Text} from "./";
import {Link} from "react-router-native";

export const Achievements = ({achievements}) => {
  return (
    <ScrollView>
      {achievements.map((achievement, idx) => <Achievement key={idx} {...achievement} />)}
      <Link to="/home"><Text>Back to Home</Text></Link>
    </ScrollView>
  );
};
