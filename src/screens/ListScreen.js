import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Josie", key: "1", age: "20" },
    { name: "Grossie", key: "2", age: "21" },
    { name: "Pelosi", key: "3", age: "20" },
    { name: "Bossie", key: "4", age: "22" },
    { name: "Dossie", key: "5", age: "22" },
    { name: "Mossie", key: "6", age: "21" },
  ];

  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
