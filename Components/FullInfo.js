import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyle } from "../styels/styel";

export default function Contacts({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // }
  return (
    <View style={globalStyle.main}>
      <Image
        source={{
          width: "100%",
          height: 200,
          uri: route.params.img,
        }}
      />
      <Text style={[globalStyle.title, style.header]}>{route.params.name}</Text>
      <Text style={style.full}>{route.params.full}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  full: {
    fontFamily: "Caveat-V",
    fontSize: 16,
    textAlign: "center",
    marginTop: 3,
    color: "#f55151",
  },
  header: {
    fontSize: 25,
    marginTop: 20,
  },
});
