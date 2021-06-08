import { makeObservable, observable, action, computed } from "mobx";
import { Alert } from "react-native";
import { v4 as uuid } from "uuid";
import getCurrentDate from "../tools/getCurrentDate";

class TodoItems {
  todoItems = [];

  constructor() {
    makeObservable(this, {
      todoItems: observable,
      add: action,
      delete: action,
      complete: action,
      count: computed,
    });
  }

  add(text) {
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
    }
  }

  delete(id) {
    this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
  }

  complete(id) {
    this.todoItems = this.todoItems.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, done: !todoItem.done } : todoItem
    );
  }

  get count() {
    return this.taskItems.length;
  }
}

export const todoItemsStore = new TodoItems();
