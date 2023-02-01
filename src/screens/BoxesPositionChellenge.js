import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxesPositionChellenge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}></Text>
      <Text style={styles.box2}></Text>
      <Text style={styles.box3}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 200,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  box1: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  box2: {
    // position: "absolute",
    backgroundColor: "green",
    height: 100,
    width: 100,
    top: 100,
    // bottom: 0,
    // left: "50%",
    // marginLeft: -50,
  },
  box3: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
});

export default BoxesPositionChellenge;
