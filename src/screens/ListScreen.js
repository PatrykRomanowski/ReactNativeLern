import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friends#1", age: 12 },
    { name: "Friends#2", age: 12 },
    { name: "Friends#3", age: 12 },
    { name: "Friends#4", age: 12 },
    { name: "Friends#5", age: 12 },
    { name: "Friends#6", age: 12 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - Age: {item.age}
            </Text>
          </View>
        );
      }}
    ></FlatList>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 70,
    marginLeft: 30,
  },
});

export default ListScreen;
