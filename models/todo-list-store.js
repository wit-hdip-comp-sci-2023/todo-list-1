import { v4 } from "uuid";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import * as fs from "fs";

const store = {
  file: "./models/todo-store.json",
  todos: [],
  init() {
    if (!fs.existsSync(this.file)) {
      fs.writeFileSync(this.file, JSON.stringify(this));
    }
  },
};
store.init();
const db = new Low(new JSONFile(store.file));

export const todoListStore = {
  async getAllTodos() {
    await db.read();
    return db.data.todos;
  },

  async addTodo(todo) {
    await db.read();
    todo._id = v4();
    db.data.todos.push(todo);
    await db.write();
    return todo;
  },

  async getTodoById(id) {
    await db.read();
    const todo = db.data.todos.find((todo) => todo._id === id);
    return todo;
  },

  async deleteTodo(id) {
    await db.read();
    const index = db.data.todos.findIndex((todo) => todo._id === id);
    db.data.todos.splice(index, 1);
    await db.write();
  },

  async deleteAllTodos() {
    db.data.todos = [];
    await db.write();
  },
};