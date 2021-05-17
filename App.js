import React, { useState } from "react";
import { StyleSheet } from "react-native";
// Hooks here
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// ./components here

import TabsScreen from "./components/tabs";

const App = () => {
  return (
    <NavigationContainer>
      <TabsScreen />
    </NavigationContainer>
  );
};

export default App();
