import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "./context";

import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import FloatingButton from "./FloatingButton";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <View style={{ flex: 2, backgroundColor: "black", width: "80%" }}>
      <Text style={styles.textH1}>Current tasks:</Text>
      <View
        style={{
          backgroundColor: "#ffcc33",
          height: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>

    <View style={{ flex: 3, width: "80%", justifyContent: "center" }}>
      <Text style={styles.textH}>{" Here will be your tasks:"}</Text>
      <FloatingButton />
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

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "React Native School" },
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
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
    margin: 10,
    marginTop: 80,
  },
  textH: {
    color: "#ffcc33",
    fontFamily: "Roboto",
    margin: 20,
  },
});
