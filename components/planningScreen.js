import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { PlanningTab } from "./planningTab";

export const PlanningScreen = () => {
  return (
    <View style={styles.planningScreen}>
      <View>
        <View style={styles.line} />
        <Text style={[styles.textH1, styles.mainMessage]}>Planning:</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <PlanningTab />
        <PlanningTab />
        <PlanningTab />
      </View>
      <View
        style={{
          name: "arrowsPlanning",
          flex: 0.3,
          width: "100%",
          backgroundColor: "#000",
          flexDirection: "row",
        }}
      >
        <View style={{ flexGrow: "1", alignItems: "flex-start" }}>
          <Text
            style={{
              color: "#ffcc33",
              fontSize: 20,
              fontFamily: "Roboto",
              padding: 20,
            }}
          >
            {`<<< `}PAST
          </Text>
        </View>
        <View style={{ flexGrow: "1", alignItems: "flex-end" }}>
          <Text
            style={{
              color: "#ffcc33",
              fontSize: 20,
              fontFamily: "Roboto",
              alignItems: "flex-end",
              padding: 20,
            }}
          >
            FUTURE{` >>>`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMessage: {
    position: "absolute",
    left: 100,
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
  textH1: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: 96,
    fontWeight: "bold",
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    padding: 20,
  },
});
