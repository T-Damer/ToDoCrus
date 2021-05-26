import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const ProfileItem = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.triangleShapeCSS} />
      </View>
      <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.itemRight}>
        <View style={styles.triangleShapeCSS} />
      </View>
      {/* <View style={styles.circular}></View> WILL NEED THIS IN "OPEN" STATE*/}
    </View>
  );
};

export const ProfileSubItem = (props) => {
  return (
    <View style={styles.subItem}>
      <View style={styles.itemLeft}>
        <View style={styles.circular} />
      </View>
      <Text style={styles.subItemText}>{props.text}</Text>
      <View style={styles.itemRight}>
        <View style={styles.circular} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#000",
    margin: 15,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    borderWidth: 2,
    borderColor: "#ffcc33",
  },
  subItem: {
    backgroundColor: "#000",
    margin: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    borderWidth: 2,
    borderColor: "#878787",
  },
  subItemText: {
    fontSize: 24,
    maxWidth: 1400,
    color: "#878787",
    justifyContent: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemRight: {
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
  triangleShapeCSS: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    transform: [{ rotate: "180deg" }],
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ffcc33",
  },
  itemText: {
    fontSize: 24,
    maxWidth: 1400,
    color: "#ffcc33",
    justifyContent: "center",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#878787",
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 5,
  },
});
