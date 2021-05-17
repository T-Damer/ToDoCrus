import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.checkbox}>
        <View style={styles.square}></View>
        <Text style={styles.textH}>{props.text}</Text>
      </View>
      <View style={styles.circle}> </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    padding: 20,
    width: "80%",
  },
  item: {
    backgroundColor: "#000",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#ffcc33",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "stretch",
  },
});
