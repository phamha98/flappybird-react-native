import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

export default function Bird({ birdBottom, birdLeft }) {
  const birdWidth = 50;
  const birdHeight = 60;
  return (
    <View
      style={{
        borderRadius: 30,
        position: "absolute",
        backgroundColor: "#F8F2F2",
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - birdWidth / 2,
        bottom: birdBottom - birdHeight / 2,
      }}
    >
      <Image
        source={require("../img/birdcut.png")}
        style={{ width: 50, height: 60, resizeMode: "contain" }}
      />
    </View>
  );
}
