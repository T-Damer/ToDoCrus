import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, backgroundColor: "grey", width: "100%" }}>
        <Text style={styles.textH1}>Current tasks:</Text>
        <hr
          style={{
            color: "#ffcc33",
            backgroundColor: "#ffcc33",
            height: 0.5,
            width: "80%",
            borderColor: "#ffcc33",
            marginTop: 75,
          }}
        />
      </View>
      <View style={{ flex: 7, width: "100%", justifyContent: "center" }}>
        <Text style={styles.textH1}>⚡️</Text>
        <Text style={styles.textH1}>Start working!</Text>
        <Text style={styles.textH}>I know you can!</Text>
        <LinearGradient
          // Button Linear Gradient
          colors={["#F7971E", "#FFD200"]}
          style={styles.actionButton}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            +
          </Text>
        </LinearGradient>

        <Icon.Button
          backgroundColor="#3b5998"
          onPress={alert("button pressed!")}
        >
          +
        </Icon.Button>
      </View>
      <View style={{ flex: 1, backgroundColor: "grey", width: "100%" }}>
        <Text style={styles.textH}> Here icons </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    width: 50,
    height: 75,
    justifyContent: "center",
    borderRadius: "35%",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textH1: {
    color: "#ffcc33",
    fontFamily: "Lato",
    fontSize: 38,
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
  },
});
