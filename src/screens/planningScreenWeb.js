import React from "react";
import { View, Text, ScrollView } from "react-native";
import PlanningTab from "./planningTab";
import styles from "./screenStyles/planningScreenStyles";

export default function PlanScreenWeb() {
  return (
    <View style={styles.planningScreen}>
      <View>
        <View style={styles.line} />
        <Text style={[styles.textH1, styles.mainMessage]}>Planning:</Text>
      </View>
      <ScrollView horizontal={true} disableIntervalMomentum={true}>
        <View style={{ flexDirection: "row" }}>
          <PlanningTab />
          <PlanningTab />
          <PlanningTab />
          <PlanningTab />
        </View>
      </ScrollView>
      <View style={styles.timeButtonsWrapper}>
        <View style={{ flexGrow: "1", alignItems: "flex-start" }}>
          <Text style={styles.timeButtonText}>{`<<< `}PAST</Text>
        </View>
        <View style={{ flexGrow: "1", alignItems: "flex-end" }}>
          <Text style={styles.timeButtonText}>FUTURE{` >>>`}</Text>
        </View>
      </View>
      <View style={{ flex: 500 }} />
    </View>
  );
}
