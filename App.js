import React, { useState, useEffect } from "react";
import { Ionicons } from "react-native-vector-icons";
import { Audio } from "expo-av";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import Bird from "./src/screen/Bird";
import Obstacles from "./src/screen/Obstacles";
export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2 + 30
  );
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lever, setLever] = useState(100);
  const [isStart, setIsStart] = useState(true);
  const [sound, setSound] = useState();
  const [stateBird, setStateBird] = useState(false);
  let obstaclesWidth = 60;
  let obstaclesHeight = 300;
  let gap = 200;
  const [gravity, setGravity] = useState(5);

  let gameTimerId;
  let obstaclesTimerid;
  let obstaclesTimeridTwo;
  let birdWing;
  //BIRD
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 30);
      return () => {
        clearInterval(gameTimerId);
      };
    }
  }, [birdBottom]);
  //start first
  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstaclesTimerid = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesTimerid);
      };
    } else {
      setScore((score) => score + 1);
      // if (score > 4) {
      //   setLever(300);
      //   setGravity(8);
      //   setJump1(50);
      // }
      // if (score > 10) {
      //   setLever(500);
      //   setGravity(8);
      //   setJump1(80);
      // }
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * lever);
    }
  }, [obstaclesLeft]);
  //second
  useEffect(() => {
    if (obstaclesLeftTwo > -60) {
      obstaclesTimeridTwo = setInterval(() => {
        setObstaclesLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesTimeridTwo);
      };
    } else {
      setScore((score) => score + 1);
      // if (score > 4) {
      //   setLever(300);
      //   setGravity(8);
      //   setJump1(50);
      // }
      // if (score > 10) {
      //   setLever(500);
      //   setGravity(8);
      //   setJump1(80);
      // }
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegHeightTwo(-Math.random() * lever);
    }
  }, [obstaclesLeftTwo]);
  //check for collisions
  useEffect(() => {
    console.log(obstaclesLeft);
    console.log(screenWidth / 2);
    console.log(obstaclesLeft > screenWidth / 2);
    if (
      ((birdBottom < obstaclesNegHeight + obstaclesHeight + 30 ||
        birdBottom > obstaclesNegHeight + obstaclesHeight + gap - 30) &&
        obstaclesLeft > screenWidth / 2 - 30 &&
        obstaclesLeft < screenWidth / 2 + 30) ||
      ((birdBottom < obstaclesNegHeightTwo + obstaclesHeight + 30 ||
        birdBottom > obstaclesNegHeightTwo + obstaclesHeight + gap - 30) &&
        obstaclesLeftTwo > screenWidth / 2 - 30 &&
        obstaclesLeftTwo < screenWidth / 2 + 30)
    ) {
      console.log("game over");
      gameOver();
    }
  });
  const gameOver = () => {
    // playSound(require("./assets/tenten.mp3"))
    clearInterval(gameTimerId);
    clearInterval(obstaclesTimerid);
    ``;
    clearInterval(obstaclesTimeridTwo);
    setIsGameOver(true);
  };
  const [jump1, setJump1] = useState(20);
  const jump = () => {
    if (!isGameOver && birdBottom < screenHeight) {
     // playSound();
      setStateBird(!stateBird);
      setBirdBottom((birdBottom) => birdBottom + jump1);
      console.log("jumped");
    }
  };
  ///wwing
  // useEffect(() => {
  //   if (!isGameOver) {
  //     birdWing = setInterval(() => {
  //       setStateBird(!stateBird);
  //     }, 30);
  //     return () => {
  //       clearInterval(obstaclesTimerid);
  //     };
  //   }
  // });
  // useEffect(() => {
  //   if (isStart) {
  //     clearInterval(gameTimerId);
  //     clearInterval(obstaclesTimerid);
  //     clearInterval(obstaclesTimeridTwo);
  //   }

  // });
  const ViewGameOver = ({ chim }) => {
    if (isGameOver)
      return (
        <View
          style={{
            width: 250,
            height: 250,
            backgroundColor: "#fff",
            position: "absolute",
            left: screenWidth / 2 - 125,
            top: 30,
            borderRadius: 8,
            borderWidth: 3,
            borderColor: "#49E656",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./src/img/birdcut.png")}
            style={{ width: 50, height: 60, resizeMode: "contain" }}
          />
          <TouchableOpacity title="clik" onPress={chim}>
            <Image
              source={require("./src/img/don.jpg")}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}></View>
          <Text style={{ fontSize: 30, color: "red" }}>Game Over</Text>
          <Text style={{ fontSize: 60, color: "green" }}>{score}</Text>
        </View>
      );
    return (
      <View
        style={{
          width: 300,
          height: 200,
          position: "absolute",
          left: screenWidth / 2 - 150,
          top: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 60, color: "green" }}>{score}</Text>
      </View>
    );
  };
  const chim = () => {
    setBirdBottom(screenHeight / 2);
    setObstaclesLeft(screenWidth);
    setObstaclesLeftTwo(screenWidth + screenWidth / 2 + 30);
    setIsGameOver(false);
    setScore(0);
    setLever(100);
    setObstaclesNegHeight(-Math.random() * 100);
    setGravity(3);
    setJump1(20);
  };
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require("./assets/pewcut.mp3"));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          source={require("./src/img/background.png")}
          style={{ flex: 1 }}
        >
          <Bird
            birdBottom={birdBottom}
            birdLeft={birdLeft}
            stateBird={stateBird}
          />
          <Obstacles
            obstaclesHeight={obstaclesHeight}
            obstaclesLeft={obstaclesLeft}
            obstaclesWidth={obstaclesWidth}
            randomBottom={obstaclesNegHeight}
            gap={gap}
            color={getRandomColor()}
          />
          <Obstacles
            obstaclesHeight={obstaclesHeight}
            obstaclesLeft={obstaclesLeftTwo}
            obstaclesWidth={obstaclesWidth}
            randomBottom={obstaclesNegHeightTwo}
            gap={gap}
            color={getRandomColor()}
          />

          {isGameOver && (
            <View
              style={{
                width: 250,
                height: 250,
                backgroundColor: "#fff",
                position: "absolute",
                left: screenWidth / 2 - 125,
                top: 30,
                borderRadius: 8,
                borderWidth: 3,
                borderColor: "#49E656",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("./src/img/birdcut.png")}
                style={{ width: 50, height: 60, resizeMode: "contain" }}
              />
              <TouchableOpacity title="clik" onPress={chim}>
                <Image
                  source={require("./src/img/don.jpg")}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row" }}></View>
              <Text style={{ fontSize: 30, color: "red" }}>Game Over</Text>
              <Text style={{ fontSize: 60, color: "green" }}>{score}</Text>
            </View>
          )}
          {!isGameOver && (
            <View
              style={{
                width: 300,
                height: 200,
                position: "absolute",
                left: screenWidth / 2 - 150,
                top: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 60, color: "green" }}>{score}</Text>
            </View>
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
