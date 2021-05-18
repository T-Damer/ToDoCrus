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
    <View style={styles.screen}>
      <View>
        <Text style={[styles.textH1, styles.mainMessage]}>Tasks:</Text>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#ffcc33",
            height: 13,
            width: "76%",
            top: "10em",
            left: "3.1em",
            borderRadius: "42px",
          }}
        />
      </View>

      <View style={styles.taskView}>
        <Tasks />
      </View>
    </View>
  );
};

export const Planning = ({ navigator }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={[styles.textH1, styles.mainMessage]}>Planning:</Text>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#ffcc33",
            height: 13,
            width: "76%",
            top: "10em",
            left: "3.1em",
            borderRadius: "42px",
          }}
        />
      </View>
    </View>
  );
};

export const Profile = ({ navigator }) => (
  <View style={styles.screen}>
    <View>
      <Text style={[styles.textH1, styles.mainMessage]}>Profile:</Text>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#ffcc33",
          height: 13,
          width: "76%",
          top: "10em",
          left: "3.1em",
          borderRadius: "42px",
        }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  taskView: {
    position: "absolute",
    width: "95%",
    height: "54%",
    left: "45px",
    top: "230px",
  },
  mainMessage: {
    position: "absolute",
    left: "1em",
    top: "83px",
    lineHeight: "6%",
  },
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 5,
  },
  container: {
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderRadius: "42px",
    borderWidth: "2px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textH1: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: "96px",
    fontWeight: "bold",
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
    backgroundColor: "#ffcc33",
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
