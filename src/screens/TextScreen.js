import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
      />
      <Text>{text}</Text>
      {text.length >= 5 ? (
        <Text>Hasło jest ok!!!</Text>
      ) : (
        <Text>Hasło musi zawierać przynajmnie pięć znaków</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
