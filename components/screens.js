import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Tasks from "./tasks";
// Additionals
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import FloatingButton from "./FloatingButton";

export const Home = ({ navigator }) => {
  return (
    <View>
      <View>
        <Text style={styles.textH1}>Current tasks:</Text>
        <View
          style={{
            backgroundColor: "#ffcc33",
            height: 1,
            width: "100%",
            alignItems: "center",
          }}
        />
      </View>

      <View>
        <Tasks />
      </View>

      <View
        style={{
          backgroundColor: "#ffcc33",
          height: 1,
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      />
    </View>
  );
};

export const Planning = ({ navigator }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.textH}>Details Screen</Text>
      </View>
    </View>
  );
};

export const Profile = ({ navigator }) => (
  <View style={styles.screen}>
    <View>
      <Text style={styles.textH}>Profile Screen</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 5,
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
    fontWeight: "bold",
    margin: 10,
    paddingTop: 80,
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    padding: 20,
  },
  items: {
    flex: 4,
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  taskInput: {
    color: "#ffcc33",
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderWidth: 1,
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "ffcc33",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderWidth: 1,
  },
  addText: {
    color: "#ffcc33",
    fontSize: 24,
  },
});
