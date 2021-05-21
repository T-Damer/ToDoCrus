import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#000",
    margin: 15,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    borderWidth: 2,
    borderColor: "#ffcc33",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#ffcc33",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    marginLeft: -15,
  },
  itemText: {
    fontSize: 24,
    maxWidth: 1400,
    color: "#ffcc33",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#ffcc33",
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
