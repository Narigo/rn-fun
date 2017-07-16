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
    return (
      <View ref="view" style={styles.container}>
        <Text style={[styles.wrap]}>
          <Text style={[styles.inner, backgroundColorStyle, colorStyle]}>
            {children}
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
    width: 250
  },
  wrap: {
    lineHeight: 25,
    textAlign: "center",
  },
  inner: {
    color: bannerTextColor,
    backgroundColor: bannerTextBackgroundColor,
  }
});