import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Tasks from "./tasks";
//Screens
import { PlanningScreen } from "./planningScreen";
// Additionals
import { PlanningTab } from "./planningTab";

export const Home = ({ navigator }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={[styles.textH1, styles.mainMessage]}>Tasks:</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.taskView}>
        <Tasks />
      </View>
    </View>
  );
};

export const Planning = ({ navigator }) => {
  return (
    //     <View style={styles.planningScreen}>
    //       <View>
    //         <View style={styles.line} />
    //         <Text style={[styles.textH1, styles.mainMessage]}>Planning:</Text>
    //       </View>
    //       <View style={{ flexDirection: "row" }}>
    //         <PlanningTab />
    //         <PlanningTab />
    //         <PlanningTab />
    //       </View>
    //       <View
    //         style={{
    //           name: "arrowsPlanning",
    //           flex: 0.3,
    //           width: "100%",
    //           backgroundColor: "#000",
    //           flexDirection: "row",
    //         }}
    //       >
    //         <View style={{ flexGrow: "1", alignItems: "flex-start" }}>
    //           <Text
    //             style={{
    //               color: "#ffcc33",
    //               fontSize: 20,
    //               fontFamily: "Roboto",
    //               padding: 20,
    //             }}
    //           >
    //             {`<<< `}PAST
    //           </Text>
    //         </View>
    //         <View style={{ flexGrow: "1", alignItems: "flex-end" }}>
    //           <Text
    //             style={{
    //               color: "#ffcc33",
    //               fontSize: 20,
    //               fontFamily: "Roboto",
    //               alignItems: "flex-end",
    //               padding: 20,
    //             }}
    //           >
    //             FUTURE{` >>>`}
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //   );
    // };
    <PlanningScreen />
  );
};

export const Profile = ({ navigator }) => (
  <View style={styles.screen}>
    <View>
      <Text style={[styles.textH1, styles.mainMessage]}>Profile:</Text>
      <View style={styles.line} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  taskView: {
    position: "absolute",
    width: "95%",
    height: "54%",
    left: 45,
    top: 230,
  },
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
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 5,
  },
  container: {
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderRadius: 42,
    borderWidth: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  items: {
    flex: 4,
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  taskInput: {
    color: "#ffcc33",
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderWidth: 1,
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#ffcc33",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderWidth: 1,
  },
  addText: {
    color: "#ffcc33",
    fontSize: 24,
  },
});
