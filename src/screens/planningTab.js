import React from "react";
import { View, Text, ScrollView } from "react-native";
import Tasks from "../components/tasks";
import getCurrentDate from "../components/tools/getCurrentDate";

import styles from "./screenStyles/planningTabStyles";

export default function PlanningTab() {
  return (
    <View style={styles.taskDateWrapper}>
      <View style={styles.tasksWrapper}>
        <View style={styles.dateWrapper} />
        <Text style={styles.dateFormat}>{getCurrentDate()}</Text>
        <View style={styles.hr} />
        <ScrollView style={styles.tasksScroll}>
          <View style={styles.taskTextWrapper}>
            <Tasks />
          </View>
        </ScrollView>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
}
