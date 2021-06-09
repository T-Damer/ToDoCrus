import { makeObservable, observable, action, computed } from "mobx";
import { useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from "uuid";
import getCurrentDate from "../tools/getCurrentDate";

// We use the array todoItems and its methods to work with the asyncStorage. This is wrapper

class TodoItems {
  todoItems = [];

  constructor() {
    makeObservable(this, {
      todoItems: observable,
      addToArray: action,
      deleteFromArray: action,
      completeInArray: action,
      count: computed,
    });
  }

  addToArray(text) {
    if (!text) {
      Alert.alert("No task", "Please enter a task", [{ text: "OK" }]);
      return;
    } else {
      this.todoItems = [
        ...this.todoItems,
        {
          id: uuid(),
          title: text,
          date: getCurrentDate(),
          done: false,
          doneDate: getCurrentDate(),
        },
      ];
      this.todoItems.map((todoItem) => this.saveInStorage(todoItem));
      this.todoItems.map((todoItem) => this.readFromStorage(todoItem));
    }
  }

  deleteFromArray(id) {
    this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
  }

  completeInArray(id) {
    this.todoItems = this.todoItems.map(
      (todoItem) =>
        todoItem.id === id ? { ...todoItem, done: !todoItem.done } : todoItem // TODO: To redefine "done" in asyncStorage we must use .merge
    );
  }

  get count() {
    return this.taskItems.length;
  }

  saveInStorage = async (todoItem) => {
    // todoItem: object
    try {
      await AsyncStorage.setItem("todoItem", JSON.stringify(todoItem)); // JSON used to parse object
    } catch (err) {
      Alert.alert("Not added", "It looks like you haven't entered a task", [
        { text: "OK" },
      ]);
    }
  };

  removeFromStorage = async (todoItem) => {
    try {
      await AsyncStorage.removeItem("todoItem");
    } catch (err) {
      Alert.alert("No tasks", "It looks like you have no tasks in a list", [
        { text: "OK" },
      ]);
    } finally {
      // setName("")
    }
  };

  readFromStorage = async (todoItem) => {
    try {
      let loadTask = await AsyncStorage.getItem("todoItem");
      if (loadTask !== null) {
        this.addToArray(JSON.parse(loadTask)); // if we have task in storage, then we will add it to array
      } else {
        return null;
      }
    } catch (err) {
      Alert.alert("Not added", "It looks like you haven't entered a task", [
        { text: "OK" },
      ]);
    }
  };
}

export const todoItemsStore = new TodoItems();
