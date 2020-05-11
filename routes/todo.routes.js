const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.post("/", todoController.createTodo);
router.get("/", todoController.getTodos);
router.get("/:id", todoController.getTodoById);
router.delete("/:id", todoController.deleteTodo);
router.patch("/:id", todoController.updateTodo);

module.exports = router;
