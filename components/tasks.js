import React, { useState } from "react";
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
const { uuid } = require("uuidv4"); // For TS use import { uuid } from 'uuidv4';
import getCurrentDate from "./getCurrentDate";

import { Task } from "./task";

import { styles } from "./tasksStyles";
import { taskStyle } from "./taskStyles";
import { Icon } from "react-native-elements";

export default function Tasks() {
  const [text, setText] = useState("");
  const [todoItems, setTodoItems] = useState(() => [
    {
      id: uuid(),
      title: text,
      date: getCurrentDate(),
      done: false,
      doneDate: getCurrentDate(),
    },
  ]);

  const handleAddTask = (text) => {
    Keyboard.dismiss();
    if (!text) {
      alert("Please enter a task");
      return;
    } else {
      setTodoItems([
        ...todoItems,
        {
          id: uuid(),
          title: text,
          date: getCurrentDate(),
          done: false,
          doneDate: getCurrentDate(),
        },
      ]);
      setText("");
    }
  };

  const completeTodoItem = (id) =>
    setTodoItems(
      todoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, done: !todoItem.done } : todoItem
      )
    );

  const removeTask = (id) => {
    let itemsCopy = [...todoItems]; // Using copy for more safety
    itemsCopy = itemsCopy.filter((todoItem) => todoItem.id !== id);
    setTodoItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentCo
        ntainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {/* This is where the tasks will go.*/}
            {todoItems.map((item, index) => (
              <Task
                key={item.id}
                date={item.date}
                title={item.title}
                done={item.done}
                doneDate={item.doneDate}
                complete={() => completeTodoItem(item.id)}
                removeTask={() => removeTask(item.id)}
              ></Task>
            ))}
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
}
