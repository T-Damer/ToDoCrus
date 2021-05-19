import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const PlanningTab = () => {
  return (
    <View>
      <View>
        <Text style={styles.dateFormat}>Fri: 21.05.21</Text>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#878787",
            height: 4,
            width: "100%",
            left: 68,
            top: 245,
          }}
        />
      </View>
      <ScrollView style={{ color: "#878787", flex: 3 }}>
        <Text style={{ color: "#878787" }}> Here your tasks: </Text>
      </ScrollView>
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
    flex: 1,
    color: "#878787",
    fontSize: 4,
    fontWeight: "bold",
    fontFamily: "Roboto",
    position: "absolute",
    width: 30.75,
    left: 68,
    top: 245,
  },
});
