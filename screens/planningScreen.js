import React from "react";
import { View, Text, ScrollView, StyleSheet, PixelRatio } from "react-native";
import { PlanningTab } from "./planningTab";
import { styles } from "./planningScreenStyles";
import { getCurrentDate } from "../components/getCurrentDate";

export const PlanningScreen = () => {
  if (PixelRatio.get() <= 1) {
    return (
      <View style={styles.planningScreen}>
        <View>
          <View style={styles.line} />
          <Text style={[styles.textH1, styles.mainMessage]}>Planning:</Text>
        </View>
        <ScrollView horizontal={true} disableIntervalMomentum={true}>
          <View style={{ flexDirection: "row" }}>
            <PlanningTab date={getCurrentDate} />
            <PlanningTab date={getCurrentDate} />
            <PlanningTab date={getCurrentDate} />
            <PlanningTab date={getCurrentDate} />
          </View>
        </ScrollView>
        <View
          style={{
            flex: 0.7,
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
        <View style={{ flex: 500 }} />
      </View>
    );
  }
  if (PixelRatio.get() > 1) {
    return (
      <View style={styles.planningScreen}>
        <View>
          <View style={styles.line} />
          <Text style={[styles.textH1, styles.mainMessage]}>Planning:</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <PlanningTab />
        </View>
        <View style={{ flex: 5 }} />
      </View>
    );
  }
};
