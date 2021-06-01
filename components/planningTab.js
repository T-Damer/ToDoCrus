import React from "react";
import { View, Text, ScrollView, StyleSheet, PixelRatio } from "react-native";
import Tasks from "./tasks";

export const PlanningTab = () => {
  return (
    <View
      style={{
        marginTop: 200,
        flex: 1,
        width: TASKS_WIDTH_LABEL,
        height: 575,
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          flex: 1,
          width: TASKS_WIDTH_LABEL,
          height: 400,
        }}
      >
        <View
          style={{
            flex: 0.5,
            width: TASKS_WIDTH_LABEL,
            height: 50,
            backgroundColor: "#000",
            alignItems: "center",
          }}
        />
        <Text style={styles.dateFormat}>12.05.21</Text>
        <View style={styles.hr} />
        <ScrollView
          style={{
            name: "tasksPlan",
            flex: 3,
            width: TASKS_WIDTH_LABEL,
            height: 100,
            flexGrow: 1,
          }}
        >
          <View style={{ marginLeft: MARGINLEFT_TASK_LABEL, marginTop: 10 }}>
            <Tasks />
          </View>
        </ScrollView>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

if (PixelRatio.get() > 1) {
  // Smthing else than WEB version
  var FONT_H1_LABEL = 64;
  var DATEFORMAT_FONT_LABEL = 42;
  var TASKS_WIDTH_LABEL = 300;
  var HR_WIDTH_LABEL = 300;
  var MARGINLEFT_TASK_LABEL = 0;
} else if (PixelRatio.get() <= 1) {
  var FONT_H1_LABEL = 96;
  var DATEFORMAT_FONT_LABEL = 52;
  var TASKS_WIDTH_LABEL = 600;
  var HR_WIDTH_LABEL = 500;
  var MARGINLEFT_TASK_LABEL = 10;
}

const styles = StyleSheet.create({
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
  hr: {
    width: HR_WIDTH_LABEL,
    borderRadius: 4,
    height: 4,
    backgroundColor: "#878787",
  },
  dateFormat: {
    alignItems: "center",
    color: "#878787",
    fontSize: DATEFORMAT_FONT_LABEL,
    fontWeight: "bold",
    fontFamily: "Roboto",
    position: "absolute",
  },
});
