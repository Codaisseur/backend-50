const User = require("./models").user;

const getAllUsers = async () => {
  const users = await User.findAll();
  console.log("one user", users);
};

const newUser = async (email, name) => {
  try {
    const newGuy = await User.create({ name: name, email: email });
    console.log(newGuy);
  } catch (e) {
    console.log(e.message);
  }
};

newUser("matias@codaisseur", "matias");
