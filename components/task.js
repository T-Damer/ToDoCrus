import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { taskStyle } from "./taskStyles";
import { Icon } from "react-native-elements";

export const Task = ({
  id,
  date,
  title,
  done,
  doneDate,
  complete,
  removeTask,
}) => {
  return (
    <View style={taskStyle.item}>
      <View style={taskStyle.itemLeft}>
        <View style={taskStyle.square}></View>
        <Text style={taskStyle.itemText}>{title}</Text>
        <View style={taskStyle.buttons}>
          <TouchableOpacity style={taskStyle.button} onPress={complete}>
            <Icon name="done" resizeMode="contain" color="#ffcc33" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={taskStyle.button} onPress={removeTask}>
            <Icon
              name="delete"
              resizeMode="contain"
              color="#ffcc33"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
