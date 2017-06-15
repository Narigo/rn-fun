import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {AchieveMe} from "./components/index";

export default class App extends Component {
  render() {
    return (
      <AchieveMe>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
      </AchieveMe>
    );
  }
}

AppRegistry.registerComponent("AchieveMe", () => App);
