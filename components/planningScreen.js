import React from "react";
import { View, Text, ScrollView, StyleSheet, PixelRatio } from "react-native";

import { PlanningTab } from "./planningTab";

import { styles } from "./planningScreenStyles";

export const PlanningScreen = () => {
  if (PixelRatio.get() >= 1) {
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
  }
  if (PixelRatio.get() <= 0.6) {
    return (
      <View style={styles.planningScreen}>
        <View>
          <View style={styles.line} />
          <Text style={[styles.textH1, styles.mainMessage]}>Planning:</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
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
  }
};
