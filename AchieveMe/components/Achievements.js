import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Achievement, BannerText} from "./";
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
      <BannerText>
        <Link to="/home">
          <Text>
            Back to Home with a very long text that hopefully breaks into the next line just
            to see how it behaves.
          </Text>
        </Link>
      </BannerText>
    </ScrollView>
  );
};
