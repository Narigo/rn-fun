import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    console.log("setting state for menu");
    this.state = {
      open: false
    };
  }

  toggleMenu() {
    console.log("toggling menu", this.state);
    this.setState({open: !this.state.open});
  }

  render() {
    const {open} = this.state;
    console.log("render menu", this.state);
    if (open) {
      return (
        <TouchableOpacity onPress={() => this.toggleMenu()} style={styles.openMenu}>
          <View>
            <Text style={styles.text}>Menu</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.toggleMenu()} style={styles.closedMenu}>
          <View>
            <Text style={styles.text}>X</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  openMenu: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#666",
    display: "flex",
    justifyContent: "center",
    height: 50,
    margin: "auto",
    position: "absolute",
    right: 0,
    top: 0,
    width: 50,
    zIndex: 2
  },
  closedMenu: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#666",
    display: "flex",
    justifyContent: "center",
    height: 50,
    margin: "auto",
    position: "absolute",
    right: 0,
    top: 0,
    width: 50,
    zIndex: 2
  },
  text: {
    fontSize: 18,
    color: "#fff"
  }
});
