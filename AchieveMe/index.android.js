import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {AchieveMe} from "./components/index";

export default class App extends Component {
  render() {
    return (
      <AchieveMe/>
    );
  }
}

AppRegistry.registerComponent("AchieveMe", () => App);
