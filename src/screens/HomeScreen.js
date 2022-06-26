import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to Image Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Change Demo"
      />
      <Button
        onPress={() => navigation.navigate("SquareScreen")}
        title="Go to Square Screen Color Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    backgroundColor: "black",
    color: "white",
  },
});

export default HomeScreen;
