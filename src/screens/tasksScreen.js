import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Tasks from "../components/tasks";
import styles from "./screenStyles/taskScreenStyles";

export default function TasksScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View>
          <Text style={[styles.textH1, styles.mainMessage]}>Tasks:</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.taskView}>
          <Tasks />
        </View>
      </View>
    </SafeAreaView>
  );
}
