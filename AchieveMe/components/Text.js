import React from "react";
import {Text as NativeText, StyleSheet} from "react-native";

export class Text extends React.Component {

  setNativeProps(nativeProps) {
    this.refs.text.setNativeProps(nativeProps);
  }

  render() {
    const {children, style} = this.props;
    return (
      <NativeText ref="text" {...this.props} style={[styles.regular, style]}>{children}</NativeText>
    );
  }

}

const styles = StyleSheet.create({
  regular: {
    color: "#fff"
  }
});
