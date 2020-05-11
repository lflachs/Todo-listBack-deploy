const TodoSchema = require("../models/todo.model");

const createTodo = async (reqBody) => {
  const todo = await TodoSchema.create(reqBody);
  return todo;
};

const getTodos = async () => {
  const todos = await TodoSchema.find();
  return todos;
};

const getTodoById = async (todoId) => {
  const todo = await TodoSchema.findById(todoId);
  if (!todo) {
    throw new Error("Not found");
  }
  return todo;
};

const deleteTodo = async (todoId) => {
  const todo = await getTodoById(todoId);
  await todo.remove();
  return todo;
};

const updateTodo = async (todoId, updateParam) => {
  const todo = await getTodoById(todoId);
  Object.assign(todo, updateParam);
  todo.save();
  return todo;
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
};
