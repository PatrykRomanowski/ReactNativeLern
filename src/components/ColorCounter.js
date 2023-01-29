import React, { useState } from "react";

import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const ColorCounter = (props) => {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button
        title={`increase ${props.color}`}
        onPress={() => {
          props.setColorHandler(props.color, 10);
        }}
      />
      <Button
        title={`decrease ${props.color}`}
        onPress={() => {
          props.setColorHandler(props.color, -10);
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
