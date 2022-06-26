import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import CounterScreen from "./CounterScreen";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Text>Color Screen Demo</Text>
      <Button
        title="Generate a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      ></Button>

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
