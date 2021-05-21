import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const PlanningTab = () => {
  return (
    // <View
    //   style={{
    //     flexDirection: "column",
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //   }}
    // >
    //   <View>
    //     <Text style={styles.dateFormat}>Fri: 21.05.21</Text>
    //     <View
    //       style={{
    //         flex: 1,
    //         name: "hr",
    //         position: "absolute",
    //         backgroundColor: "#878787",
    //         height: 4,
    //         width: "100%",
    //         left: 68,
    //         top: 250,
    //       }}
    //     />
    //   </View>
    //   <View style={styles.container}>
    //     <ScrollView
    //       contentContainerStyle={{
    //         flexGrow: 1,
    //       }}
    //       keyboardShouldPersistTaps="handled"
    //     >
    //       <Text
    //         style={{
    //           color: "#ffcc33",
    //           textSize: 48,
    //         }}
    //       >
    //         HERE YOUR TASKS
    //       </Text>
    //     </ScrollView>
    //   </View>
    // </View>
    <View
      style={{
        marginTop: 200,
        flex: 1,
        width: 600,
        height: 575,
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          flex: 1,
          width: 600,
          height: 400,
          backgroundColor: "#424242",
        }}
      >
        <View
          style={{
            name: "datePlan",
            flex: 0.5,
            width: 600,
            height: 50,
            backgroundColor: "#000",
            alignItems: "center",
          }}
        />
        <Text style={styles.dateFormat}>Fri: 21.05.21</Text>
        <View
          style={{
            name: "hrGrey",
            width: 600,
            borderRadius: 4,
            height: 4,
            backgroundColor: "#878787",
          }}
        />
        <ScrollView
          style={{
            name: "tasksPlan",
            flex: 3,
            width: 600,
            height: 100,
            flexGrow: 1,
            backgroundColor: "#424242",
          }}
        />
        <View
          style={{
            name: "arrowsPlanning",
            flex: 0.2,
            width: "100%",
            backgroundColor: "orange",
          }}
        />
      </View>
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
    alignItems: "center",
    color: "#878787",
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: "Roboto",
    position: "absolute",
  },
});
