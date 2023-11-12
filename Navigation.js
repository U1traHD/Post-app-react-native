import React from "react";
import Main from "./Components/Main";
import FullInfo from "./Components/FullInfo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyle } from "./styels/styel";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          style={globalStyle.title}
          name="Main"
          component={Main}
          options={{
            title: "Главная",
            headerStyle: { backgroundColor: "#eb5d3d", height: 100 },
            headerTitleStyle: { fontWeight: "light" },
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "Статья" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
