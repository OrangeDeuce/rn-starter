import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const SquareScreen = () => {
  return (
    <View>
      <Text>Square Screen Color Demo</Text>
      <ColorAdjuster color="Red" />
      <ColorAdjuster color="Blue" />
      <ColorAdjuster color="Green" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
