import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ProfileItem, ProfileSubItem } from "./profileScreenItem";

export const ProfileScreenUI = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flex: 1,
        }}
      >
        <ProfileItem text={"OPTIONS:"} />
        <ProfileSubItem text={"Change profile"} />
        <ProfileSubItem text={"Change Theme"} />
        <ProfileItem text={"CONNECTIONS:"} />
        <ProfileSubItem text={"CONNECT WITH GOOGLE"} />
        <ProfileSubItem text={"CONNECT WITH GITHUB"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
        <ProfileItem text={"CUSTOMIZATION:"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
