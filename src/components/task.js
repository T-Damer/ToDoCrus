import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import taskStyle from "./componentStyles/taskStyles";
import { Icon } from "react-native-elements";

export default function Task({
  id,
  date,
  title,
  done,
  doneDate,
  removeTask,
  complete,
  count,
}) {
  return (
    <View style={taskStyle.item}>
      <View style={taskStyle.itemLeft}>
        <View style={taskStyle.square}></View>
        {!done ? (
          <Text style={taskStyle.itemText}>{title}</Text>
        ) : (
          <Text style={taskStyle.itemTextComplete}>{title}</Text>
        )}
        <View style={taskStyle.buttons}>
          {!done ? (
            <TouchableOpacity style={taskStyle.button} onPress={complete}>
              <Icon
                name="done"
                resizeMode="contain"
                color="#ffcc33"
                size={30}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={taskStyle.button} onPress={complete}>
              <Icon
                name="reply"
                resizeMode="contain"
                color="#ffcc33"
                size={30}
              />
            </TouchableOpacity>
          )}
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
}
