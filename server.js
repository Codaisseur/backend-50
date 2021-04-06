const express = require("express");
const PORT = 4001;
const User = require("./models").user;

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).send("user not found");
    }
    res.send(user);
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    console.log("creating new user");
    const { name, email } = req.body;
    const newGuy = await User.create({ name: name, email: email });
    res.send(newGuy);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log("listening on 4001"));
