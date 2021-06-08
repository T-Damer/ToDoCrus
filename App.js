import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import TabsScreen from "./src/components/bottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <TabsScreen />
    </NavigationContainer>
  );
}
