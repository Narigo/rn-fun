import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Achievement, BannerText, Text} from "./";
import {Link} from "react-router-native";

export const Achievements = ({achievements, setAchievement}) => {
  return (
    <ScrollView>
      {achievements.map((achievement, idx) => (
        <Achievement
          key={idx}
          setAchievement={() => setAchievement(idx)}
          {...achievement}
        />
      ))}
      <Link to="/home">
        <BannerText>
          <Text>
            Back to Home with a very long text that hopefully breaks into the next line just
            to see how it behaves.
          </Text>
        </BannerText>
      </Link>
    </ScrollView>
  );
};
