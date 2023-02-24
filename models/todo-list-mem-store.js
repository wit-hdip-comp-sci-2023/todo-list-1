import { v4 } from "uuid";

let todos = [];

export const todoStore = {
  
  async getAllTodos() {
    return users;
  },

  async addTodo(todo) {
    todo._id = v4();
    todos.push(user);
    return todo;
  },

  async getAllTodos() {
   return todos;
  },

  getTodo(id) {
    return todos.find((todo) => todo._id === id);
  },

  async getUserByEmail(email) {
    return users.find((user) => user.email === email);
  },

  removeTodo(id) {
    const index = todos.findIndex((todo) => todo._id === id);
    todos.splice(index, 1);
  },

  async deleteAll() {
    todos = [];
  },
};


