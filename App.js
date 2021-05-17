import React, { useState } from "react";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import TabsScreen from "./components/tabs";

export default function App() {
  return (
    <NavigationContainer>
      <TabsScreen />
    </NavigationContainer>
  );
}
