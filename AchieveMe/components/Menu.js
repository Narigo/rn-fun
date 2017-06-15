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
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#666",
    alignSelf: "flex-start"
  },
  closedMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#666",
    alignSelf: "flex-start",
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    height: 200,
    width: 200,
    margin: "auto"
  },
  text: {
    fontSize: 18,
    color: "#fff"
  }
});
