import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorAdjuster = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`+ More ${color}`}></Button>
      <Button title={`- Less ${color}`}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjuster;
