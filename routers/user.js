const { Router } = require("express");
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
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

router.post("/", async (req, res, next) => {
  try {
    console.log("body", req.body);
    const { email, name, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send("You must provide an email address and password");
    }
    const exists = await User.findOne({ where: { email: email } });
    if (exists) {
      return res.status(400).send("A user with this email already exists");
    }
    const newUser = await User.create({ name, email, password });

    res.send(newUser);
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
