import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { observer } from "mobx-react";

import Task from "./task";

import styles from "./componentStyles/tasksStyles";
import { todoItemsStore } from "../stateStorage/todoItems";

const Tasks = observer(() => {
  const [text, setText] = useState("");

  const handleAddTask = (text) => {
    Keyboard.dismiss();
    todoItemsStore.addToArray(text);
    setText("");
  };

  // Still don't know if we really need this
  useEffect(() => {
    todoItemsStore.readFromStorage();
  }, []);

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
            {/* This is where the tasks will go.*/}
            {todoItemsStore.todoItems.map((item, index) => (
              <Task
                key={item.id}
                date={item.date}
                title={item.title}
                done={item.done}
                doneDate={item.doneDate}
                removeTask={() => todoItemsStore.deleteFromArray(item.id)}
                complete={() => todoItemsStore.completeInArray(item.id)}
              ></Task>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboardAvoidingView which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          placeholderTextColor="#878787"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask(text)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
});

export default Tasks;
