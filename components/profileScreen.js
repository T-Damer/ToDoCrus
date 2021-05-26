import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { ProfileScreenUI } from "./profileScreenUI";
import { ProfileItem, ProfileSubItem } from "./profileScreenItem";

export const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.7 }}>
        <Text style={[styles.textH1, styles.mainMessage]}>Profile:</Text>
        <View style={styles.line} />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <ProfileItem text={"OPTIONS:"} />
          <ProfileSubItem text={"Change profile"} />
        </ScrollView>
      </View>
      <View style={{ flex: 0.6 }} />
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
  screen: {
    backgroundColor: "black",
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
    flexDirection: "column",
  },
  textH1: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: RFPercentage(7),
    fontWeight: "bold",
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    padding: 20,
  },
});
