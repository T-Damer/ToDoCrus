import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Task from "./task";
// import LocalStorage from "../database/localBase.js";

import { styles } from "./tasksStyles";

// const storage = new LocalStorage();

export default function Tasks() {
  // We're using states to manipulate tasks between two arrays
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (!task) {
      alert("Please enter a task");
      return;
    }
    setTaskItems([...taskItems, task]); // Refreshes the list of task by adding ALL of them again + new task
    setTask(""); //Sometimes null works better, cleans the input field
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]; // Using copy for more safety
    itemsCopy.splice(index, 1); // deletes the task TODO: change the "done": true, not just delete task
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {/* This is where the tasks will go */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
          clearButtonMode="always"
        />
        <TouchableOpacity onPress={() => handleAddTask(this)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
