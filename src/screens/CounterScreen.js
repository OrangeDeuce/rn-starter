import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0); //to create a state to monitor the counter variable

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
      <Text>Current Count: {counter} </Text>
    </View>
  );
};

export default CounterScreen;
