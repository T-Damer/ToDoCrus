import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Planning, Home, Profile } from "./screens";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();
const fireButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#ff9900",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#000",
          color: "#ffcc33",
          borderColor: "#ffcc33",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tabs.Screen
        name="Planning"
        component={Planning}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                bottom: 3,
              }}
            >
              <Image
                source={require("../assets/icons/planning.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#ffcc33" : "#424242",
                }}
              />
              <Text style={{ color: focused ? "#ffcc33" : "#424242" }}>
                Planning
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                bottom: 4,
              }}
            >
              <Image
                source={require("../assets/icons/fire.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#ffcc33" : "#424242",
                }}
              />
              <Text style={{ color: focused ? "#ffcc33" : "#424242" }}>
                DOING
              </Text>
            </View>
          ),

          // tabBarButton: (props) => <fireButton {...props} />,
          // This line of code makes CSSStyle ERROR
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                bottom: 3,
              }}
            >
              <Image
                source={require("../assets/icons/profile.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#ffcc33" : "#424242",
                }}
              />
              <Text style={{ color: focused ? "#ffcc33" : "#424242" }}>
                Profiling
              </Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#ff9900",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
