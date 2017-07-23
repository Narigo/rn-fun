import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "./";
import {bannerTextColor, bannerTextBackgroundColor} from "../styles/variables";

export class BannerText extends React.Component {
  setNativeProps(nativeProps) {
    this.refs.view.setNativeProps(nativeProps);
  }

  render() {
    const {backgroundColor, children, color} = this.props;
    const colorStyle = color && StyleSheet.create({style:{color}}).style;
    const backgroundColorStyle = backgroundColor && StyleSheet.create({style:{backgroundColor}}).style;

    const myText = "hier ist ein langer text der hoffentlich irgendwann mal umbricht und wir ihn hier leichter bearbeiten können.";

    return (
      <View ref="view" style={styles.container}>
        <Text style={[styles.wrap]}>
          <Text style={[styles.inner, backgroundColorStyle, colorStyle]}>
            {myText}
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 250,
    backgroundColor: "#f00"
  },
  wrap: {
    lineHeight: 25,
    textAlign: "center",
    backgroundColor: "#0f0"
  },
  inner: {
    backgroundColor: "#00f",
    color: bannerTextColor
  }
});