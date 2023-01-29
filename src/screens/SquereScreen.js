import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SqereScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColorHandler = (colorName, value) => {
    if (colorName === "Red") {
      setRed(red + value);

      if (red < 0) {
        setRed(0);
        return;
      }
      if (red > 255) {
        setRed(255);
        return;
      }
    }

    if (colorName === "Green") {
      setGreen(green + value);

      if (green < 0) {
        setGreen(0);
        return;
      }
      if (green > 255) {
        setGreen(255);
        return;
      }
    }

    if (colorName === "Blue") {
      setBlue(blue + value);

      if (blue < 0) {
        setBlue(0);
        return;
      }
      if (blue > 255) {
        setBlue(255);
        return;
      }
    }
  };

  return (
    <View>
      <ColorCounter color="Red" setColorHandler={setColorHandler} />
      <ColorCounter color="Blue" setColorHandler={setColorHandler} />
      <ColorCounter color="Green" setColorHandler={setColorHandler} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SqereScreen;
