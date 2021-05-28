import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ProfileItem, ProfileSubItem } from "./profileScreenItem";
import { styles } from "./profileScreenStyles";
// import { ProfileScreenUI } from "/.profileScreenUI";

export const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.7 }}>
        <Text style={[styles.textH1, styles.mainMessage]}>Profile:</Text>
        <View style={styles.line} />
      </View>
      <View style={{ flex: 2 }}>
        <ScrollView
          style={{
            flexGrow: 1,
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
