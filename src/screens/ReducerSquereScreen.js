import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amound > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };

    case "blue":
      return { ...state, blue: state.blue + action.amount };

    default:
      return state;
  }
};

const ReducerSquereScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const setColorHandler = (colorName, value) => {
    dispatch({ colorToChange: colorName, amount: value });
  };

  return (
    <View>
      <ColorCounter color="red" setColorHandler={setColorHandler} />
      <ColorCounter color="blue" setColorHandler={setColorHandler} />
      <ColorCounter color="green" setColorHandler={setColorHandler} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

export default ReducerSquereScreen;
