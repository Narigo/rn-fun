import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const Menu = ({open}) => {
  if (open) {
    return (
      <View style={styles.openMenu}>
        <Text style={styles.text}>Menu</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.closedMenu}>
        <Text style={styles.text}>X</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  openMenu: {
    backgroundColor: "#666"
  },
  closedMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  text: {
    fontSize: 18,
    color: "#fff"
  }
});
