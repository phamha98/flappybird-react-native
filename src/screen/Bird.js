import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

export default function Bird({ birdBottom, birdLeft, stateBird }) {
  const birdWidth = 50;
  const birdHeight = 60;

  return (
    <View
      style={{
        // borderRadius: 30,
        position: "absolute",
        //backgroundColor: "#F8F2F2",
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - birdWidth / 2,
        bottom: birdBottom - birdHeight / 2,
      }}
    >
      <Image
        source={require("../img/chimgoc.png")}
        style={{ width: 50, height: 60, resizeMode: "contain",position:'absolute' }}
      />
      <Image
        source={
          stateBird ? require("../img/canh1.png") : require("../img/canh2.png")
        }
        style={{ width: 50, height: 60, resizeMode: "contain",position:'absolute' }}
      />
    </View>
  );
}
