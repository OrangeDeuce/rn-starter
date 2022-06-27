import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);
  console.log(green);
  console.log(blue);

  const setColor = (color, change) => {
    //color === 'red', 'green' or 'blue' - used to decide what color to change - We inspect color first
    //change - this is the amt of color to change it by (Either +15 or -15)
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        //if the change brings us outside boundaries
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        //if the change brings us outside boundaries
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        //if the change brings us outside boundaries
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <Text>Square Screen Color Demo</Text>
      <ColorAdjuster
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorAdjuster
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorAdjuster
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
