const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  getTodoByID,
  getAllTodoByUserID,
  addTodo,
  deleteTodoByID,
  updateTodoByID,
  deleteAllTodo,
} = require("../controllers/todo.controller");

router.get("/", getAllTodo);
router.get("/:id", getTodoByID);
router.get("/user/:id", getAllTodoByUserID);
router.post("/", addTodo);
router.delete("/:id", deleteTodoByID);
router.put("/:id", updateTodoByID);
router.delete("/", deleteAllTodo);

module.exports = router;
