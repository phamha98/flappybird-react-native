import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Obstacles = ({
  color,
  obstaclesWidth,
  obstaclesHeight,
  randomBottom,
  gap,
  obstaclesLeft,
}) => {
  return (
    <>
      <View
        style={{
          position: "absolute",
         // backgroundColor: color,
          width: obstaclesWidth,
          height: 600,
          left: obstaclesLeft,
          bottom: randomBottom + obstaclesHeight + gap,
          flexDirection: "row",
        }}
      >
        <View style={styles.view11}></View>
        <View style={styles.view12}></View>
      </View>
      <View
        style={{
          position: "absolute",
         // backgroundColor: color,
          width: obstaclesWidth,
          height: obstaclesHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
          flexDirection: "row",
        }}
      >
        <View style={styles.view21}></View>
        <View style={styles.view22}></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
    
  view11: {
    position: "absolute",
    bottom: 40,
    width: 50,
    height: 560,
    backgroundColor: "#25E639",
    marginHorizontal: 5,
    borderColor:'yellow',
    borderWidth:1
  },
  view12: {
    position: "absolute",
    bottom: 0,
    width: 60,
    height: 40,
    backgroundColor: "#05690F",
    borderRadius: 5,
    borderColor:'blue',
    borderWidth:1
  },
  view21: {
    position: "absolute",
    top: 0,
    width: 60,
    height: 40,
    backgroundColor: "#05690F",
    borderRadius: 5,
    borderColor:'blue',
    borderWidth:1
  },
  view22: {
    position: "absolute",
    top: 40,
    width: 50,
    height: 460,
    backgroundColor: "#25E639",
    marginHorizontal: 5,
    borderColor:'yellow',
    borderWidth:1
  },
});
export default Obstacles;
