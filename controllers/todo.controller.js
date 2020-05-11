const todoService = require("../services/todo.services");

const createTodo = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const todo = await todoService.createTodo({
      title: req.body.title,
      done: false,
    });
    res.status(200).json({ result: todo });
  } catch (err) {
    next(err);
  }
};

const getTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getTodos();
    res.status(200).json({ result: todos });
  } catch (err) {
    next(err);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    res.status(200).json({ result: todo });
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const todo = await todoService.deleteTodo(req.params.id);
    res.status(200).json({ result: "done", deletedtodo: todo });
  } catch (err) {
    next(err);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const todo = await todoService.updateTodo(req.params.id, req.body);
    res.status(200).json({ result: "done", updatedTodo: todo });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
};
