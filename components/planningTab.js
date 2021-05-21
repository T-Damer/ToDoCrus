import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const PlanningTab = () => {
  return (
    <View
      style={{
        marginTop: 200,
        flex: 1,
        width: 600,
        height: 575,
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          flex: 1,
          width: 600,
          height: 400,
          backgroundColor: "#424242",
        }}
      >
        <View
          style={{
            name: "datePlan",
            flex: 0.5,
            width: 600,
            height: 50,
            backgroundColor: "#000",
            alignItems: "center",
          }}
        />
        <Text style={styles.dateFormat}>DATE</Text>
        <View
          style={{
            name: "hrGrey",
            width: 600,
            borderRadius: 4,
            height: 4,
            backgroundColor: "#878787",
          }}
        />
        <ScrollView
          style={{
            name: "tasksPlan",
            flex: 3,
            width: 600,
            height: 100,
            flexGrow: 1,
            backgroundColor: "#424242",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  dateFormat: {
    alignItems: "center",
    color: "#878787",
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: "Roboto",
    position: "absolute",
  },
});
