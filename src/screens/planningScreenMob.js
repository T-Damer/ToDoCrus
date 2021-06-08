import React from "react";
import { View, Text, ScrollView } from "react-native";
import PlanningTab from "./planningTab";
import styles from "./screenStyles/planningScreenStyles";

export default function PlanScreenMob() {
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
