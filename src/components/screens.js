import React from "react";

//Screens
import PlanningScreen from "../screens/planningScreen";
import ProfileScreen from "../screens/profileScreen";
import TasksScreen from "../screens/tasksScreen";

export const Home = ({ navigator }) => {
  return <TasksScreen />;
};

export const Planning = ({ navigator }) => {
  return <PlanningScreen />;
};

export const Profile = ({ navigator }) => {
  return <ProfileScreen />;
};
