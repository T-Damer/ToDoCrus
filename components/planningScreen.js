import React from "react";
import { View, Text, ScrollView, StyleSheet, PixelRatio } from "react-native";
import { PlanningTab } from "./planningTab";
import { styles } from "./planningScreenStyles";
// Must be updated, because user may scroll to endless and app must support this
// Actually it's not working
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

var date1 = new Date().getDate() + 1;
var month1 = new Date().getMonth() + 1;
var year1 = new Date().getFullYear();

var date2 = new Date().getDate() + 2;
var month2 = new Date().getMonth() + 1;
var year2 = new Date().getFullYear();

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
            <PlanningTab date={date} month={month} year={year} />
            <PlanningTab date={date1} month={month1} year={year1} />
            <PlanningTab date={date2} month={month2} year={year2} />
            <PlanningTab date={date2} month={month2} year={year2} />
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
