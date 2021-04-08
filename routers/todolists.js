const { Router } = require("express");
const TodoList = require("../models").todoList;
const { failRandomly } = require("../middlewares");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    //const lists = await TodoList.findAll();
    console.log("hello from router");
    res.send("hello im in the router");
  } catch (e) {
    console.log(e.message);
  }
});

// middlewares at route level
router.get("/:id", failRandomly, async (req, res) => {
  try {
    console.log("sometimes fail");
    res.send("hello im the other route");
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
