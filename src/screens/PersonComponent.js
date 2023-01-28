import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PersonComponent = () => {
  const name = "Patryk";

  return (
    <View>
      <Text style={styles.person}>Getting started with react native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  person: {
    fontSize: 40,
  },
});

export default PersonComponent;
