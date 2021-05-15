import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import FloatingButton from "./FloatingButton";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ flex: 2, backgroundColor: "grey", width: "100%" }}>
        <Text style={styles.textH1}>Current tasks:</Text>

        <View
          style={{
            borderBottomColor: "ffcc33",
            borderBottomWidth: 1,
            color: "#ffcc33",
            backgroundColor: "#ffcc33",
            height: 0.5,
            width: "80%",
            borderColor: "#ffcc33",
            marginTop: 75,
          }}
        />
      </View>

      <View style={{ flex: 7, width: "100%" }}></View>

      <FloatingButton style={{ bottom: -10, alignItems: "center" }} />

      <View style={{ flex: 1, backgroundColor: "grey", width: "100%" }}>
        <Text style={styles.textH}> Here icons </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    width: 48,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textH1: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: 38,
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
  },
});
