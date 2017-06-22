import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {withRouter} from "react-router-native";

export const Menu = withRouter(class extends React.Component {

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
          <TouchableOpacity onPress={() => this.showFriendlist()} style={styles.menuItem}>
            <View>
              <Text style={styles.text}>Friendlist</Text>
            </View>
          </TouchableOpacity>
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
    const {history} = this.props;
    this.setState({open: false});
    history.push("list");
  }

  showFriendlist() {
    const {history} = this.props;
    this.setState({open: false});
    history.push("friends");
  }

});

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
    height: 75,
    margin: "auto",
    position: "absolute",
    right: 0,
    top: 0,
    width: 75,
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
