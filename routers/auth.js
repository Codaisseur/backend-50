const { Router } = require("express");
const bcrypt = require("bcrypt");

const { toJWT } = require("../auth/jwt");

const User = require("../models").user;

const router = new Router();

router.post("/signup", async (req, res, next) => {
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

    // create the user
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    // email, password => body
    const { email, password } = req.body;
    // check if there is a user with this email
    const user = await User.findOne({ where: { email } }); //

    if (!user) {
      return res.status(404).send("There is no user with this email");
    }
    // check if the passwords match

    const match = bcrypt.compareSync(password, user.password);

    if (!match) {
      return res.status(400).send("Passwords don't match");
    }

    const token = toJWT({ userId: user.id });

    console.log("token", token);
    res.send({ message: "Welcome you're logged in", token });

    // generate a token and send it back
  } catch (e) {
    next(e);
  }
});

module.exports = router;
