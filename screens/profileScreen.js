import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ProfileItem, ProfileSubItem } from "./profileScreenItem";
import { styles } from "./profileScreenStyles";

export const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.7 }}>
        <Text style={[styles.textH1, styles.mainMessage]}>Profile:</Text>
        <View style={styles.line} />
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <ScrollView
          style={{
            flexGrow: 1,
            width: "80%",
          }}
        >
          <ProfileItem text={"OPTIONS:"} />
          <ProfileSubItem text={"Change name"} />
          <ProfileSubItem text={"Change avatar"} />
          <ProfileSubItem text={"Change email"} />
          <ProfileItem text={"ADDITIONAL OPTIONS:"} />
          <ProfileSubItem text={"Change profile"} />
          <ProfileItem text={"CUSTOMIZATION"} />
          <ProfileSubItem text={"ENABLE DARK MODE?"} />
        </ScrollView>
      </View>
      <View style={{ flex: 0.5 }} />
    </View>
  );
};
