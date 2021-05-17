import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Tasks from "./tasks";
import { AuthContext } from "./context";
// Additionals
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import FloatingButton from "./FloatingButton";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <View style={{ flex: 1, backgroundColor: "black", width: "80%" }}>
      <Text style={styles.textH1}>Current tasks:</Text>
      <View
        style={{
          backgroundColor: "#ffcc33",
          height: 1,
          width: "100%",
          alignItems: "center",
        }}
      />
    </View>

    <View>
      <Tasks />
    </View>

    <View
      style={{
        backgroundColor: "#ffcc33",
        height: 1,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
      }}
    />
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Hello, Master</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        c
        onPress={() => navigation.push("CreateAccount")} // after push specify the name where we going to
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textH1: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    fontSize: 38,
    fontWeight: "bold",
    margin: 10,
    paddingTop: 80,
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    padding: 20,
  },
  items: {
    flex: 4,
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  taskInput: {
    color: "#ffcc33",
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderWidth: 1,
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "ffcc33",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderColor: "#ffcc33",
    borderWidth: 1,
  },
  addText: {
    color: "#ffcc33",
    fontSize: 24,
  },
});
