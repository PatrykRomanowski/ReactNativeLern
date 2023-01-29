import React from "react";
import ImageDetail from "../components/ImageDetail";

import { View, Text, StyleSheet } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSourse={require("../images/forest.jpg")}
        score="9"
      />
      <ImageDetail
        title="Mountain"
        imageSourse={require("../images/mountain.jpg")}
        score="9"
      />
      <ImageDetail
        title="Beach"
        score="9"
        imageSourse={require("../images/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
