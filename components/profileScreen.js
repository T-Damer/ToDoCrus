import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ProfileItem, ProfileSubItem } from "./profileScreenItem";
import { styles } from "./profileScreenStyles";
// import { ProfileScreenUI } from "/.profileScreenUI";

export const ProfileScreen = () => {
  return (
    <View style={styles.screeen}>
      <View style={{ flex: 0.7 }}>
        <Text style={[styles.textH1, styles.mainMessage]}>Profile:</Text>
        <View style={styles.line} />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <ProfileItem text={"OPTIONS:"} />
          <ProfileSubItem text={"Change profile"} />
        </ScrollView>
      </View>
      <View style={{ flex: 0.6 }} />
    </View>
  );
};
