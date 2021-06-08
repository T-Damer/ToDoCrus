import React from "react";
import { View, Text } from "react-native";

import styles from "./screenStyles/profileScreenItemsStyles";

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
