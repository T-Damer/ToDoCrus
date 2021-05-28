import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, PixelRatio } from "react-native";
import Tasks from "./tasks";
//Screens
import { PlanningScreen } from "./planningScreen";
import { ProfileScreen } from "./profileScreen";

// Additionals

export const Home = ({ navigator }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={[styles.textH1, styles.mainMessage]}>Tasks:</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.taskView}>
        <Tasks />
      </View>
    </View>
  );
};

export const Planning = ({ navigator }) => {
  return <PlanningScreen />;
};

export const Profile = ({ navigator }) => (
  <View>
    <ProfileScreen />
  </View>
);

if (PixelRatio.get() > 1) {
  var FONT_H1_LABEL = 64;
  var MAINMSG_LEFT_STYLE = 50;
} else {
  var FONT_H1_LABEL = 96;
  var MAINMSG_LEFT_STYLE = 100;
}

const styles = StyleSheet.create({
  taskView: {
    position: "absolute",
    width: "95%",
    height: "54%",
    left: 45,
    top: 230,
  },
  mainMessage: {
    position: "absolute",
    left: MAINMSG_LEFT_STYLE,
    top: 83,
    lineHeight: 6,
  },
  line: {
    position: "absolute",
    backgroundColor: "#ffcc33",
    height: 13,
    width: "76%",
    top: 150,
    left: 50,
    borderRadius: 42,
  },
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  planningScreen: {
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
    borderRadius: 42,
    borderWidth: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textH1: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: FONT_H1_LABEL,
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
