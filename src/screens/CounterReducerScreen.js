import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  if (action.type === "increment") {
    console.log("increment");
    return { ...state, counter: state.counter + action.payload };
  }
  if (action.type === "decrement") {
    console.log("decrement");
    return { ...state, counter: state.counter - action.payload };
  }
  return console.log("return");
};

const CounterReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 10 });

          // setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      ></Button>
      <Text> Current Counter: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterReducerScreen;
