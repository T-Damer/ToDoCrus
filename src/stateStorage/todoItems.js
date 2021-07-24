import { makeObservable, observable, action, computed } from "mobx";
import { Alert } from "react-native";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import getCurrentDate from "../tools/getCurrentDate";
import localforage from "localforage";

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
          doneDate: "",
        },
      ];
      this.todoItems.map((todoItem) => this.saveInStorage(todoItem));
      this.todoItems.map((todoItem) => this.readFromStorage(todoItem));
      readFromStorage();
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
    return Number(this.taskItems.length);
  }

  saveInStorage = async (todoItem) => {
    // todoItem: object
    try {
      localforage.setItem("task", JSON.stringify(todoItem)); // JSON used to parse object
    } catch (err) {
      Alert.alert("Not added", "It looks like you haven't entered a task", [
        { text: "OK" },
      ]);
    }
  };

  removeFromStorage = async (todoItem) => {
    try {
      await localforage.removeItem(todoItem.id);
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
      let loadTask = await localforage.getItem("task");
      if (loadTask !== null) {
        this.addToArray(JSON.parse(todoItem)); // if we have task in storage, then we will add it to array
      } else {
        return "no tasks";
      }
    } catch (err) {
      Alert.alert("Not added", "It looks like you have no tasks", [
        { text: "OK" },
      ]);
    }
  };
}

export const todoItemsStore = new TodoItems();
