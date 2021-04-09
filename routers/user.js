const { Router } = require("express");
const User = require("../models").user;
const TodoList = require("../models").todoList;
const TodoItem = require("../models").todoItem;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: TodoList, include: [TodoItem] }],
    });
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByP(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const userToDelete = await User.findByPk(id);

    if (!userToDelete) {
      return res.status(404).send("user not found");
    }

    await userToDelete.destroy();

    res.send(userToUpdate);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
