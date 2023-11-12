import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainStack from "./Navigation";

const fonts = () =>
  Font.loadAsync({
    "Caveat-V": require("./assets/fonts/Caveat-VariableFont_wght.ttf"),
    "Pacifico-R": require("./assets/fonts/Pacifico-Regular.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return <MainStack />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({});
