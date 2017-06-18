import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const {open} = this.state;
    if (open) {
      return (
        <View style={styles.openMenu}>
          <TouchableOpacity onPress={() => this.toggleMenu()} style={[styles.menuItem, styles.menuClose]}>
            <View>
              <Text style={styles.text}>X</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.sendAchievement()} style={styles.menuItem}>
            <View>
              <Text style={styles.text}>Send achievement</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.menuItem}>
            <Text style={styles.text}>Share</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.text}>Share</Text>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.toggleMenu()} style={styles.closedMenu}>
          <View>
            <Text style={styles.text}>Menu</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  toggleMenu() {
    this.setState({open: !this.state.open});
  }

  sendAchievement() {
    this.setState({open: false});
    // TODO send achievement
    console.log("sending achievement to someone in contacts...");
  }

}

const styles = StyleSheet.create({
  openMenu: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#666",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
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
  menuItem: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: 50,
    width: "100%"
  },
  menuClose: {
    alignItems: "flex-end",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff"
  }
});
