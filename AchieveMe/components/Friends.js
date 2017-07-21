import React from "react";
import {ScrollView} from "react-native";
import {Friend, Text} from "./";
import {Link} from "react-router-native";

export const Friends = ({friends, setFriend}) => {
  return (
    <ScrollView>
      {friends.map((friend, idx) => (
        <Friend
          key={idx}
          setFriend={() => setFriend(idx)}
          {...friend}
        />
      ))}
      <Link to="/list"><Text>Back to Home</Text></Link>
    </ScrollView>
  );
};
