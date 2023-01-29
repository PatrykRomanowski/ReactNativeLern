import React from "react";
import { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>HomeScreen!</Text>
      <Button
        title="XD"
        onPress={() => {
          props.navigation.navigate("Components");
        }}
      ></Button>
      <Button
        title="Go to list demo"
        onPress={() => {
          props.navigation.navigate("List");
        }}
      ></Button>
      <Button
        title="Go to ImageScreen"
        onPress={() => {
          props.navigation.navigate("Image");
        }}
      ></Button>
      <Button
        title="Go to Counter"
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
      ></Button>
      <Button
        title="Go to Color Screen"
        onPress={() => {
          props.navigation.navigate("Color");
        }}
      ></Button>
      <Button
        title="Go to Sqere Screen"
        onPress={() => {
          props.navigation.navigate("Sqere");
        }}
      ></Button>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
        <Text style={styles.text2}>XD</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go To lIst demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },

  view: {
    flex: 1,
  },

  text2: {
    width: "90%",
    marginVertical: 10,
    padding: 10,
    textAlign: "center",
    backgroundColor: "red",
    borderRadius: 5,
  },

  button: {
    fontSize: 30,
    marginVertical: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
    flexDirection: "column",
  },
});

export default HomeScreen;
