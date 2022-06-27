import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorAdjuster = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`+ More ${color}`}></Button>
      <Button onPress={() => onDecrease()} title={`- Less ${color}`}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjuster;
