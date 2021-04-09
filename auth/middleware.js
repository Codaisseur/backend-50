const { toData } = require("./jwt");
const User = require("../models").user;

const authMiddleware = async (request, response, next) => {
  // Request header =>
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).send("No auth header");
  }
  const auth = authHeader.split(" "); // "Bearer ajsbdkajgbdkjavdkjadkjqbdkjabdkjab"

  if (auth[0] === "Bearer" && auth[1]) {
    const token = auth[1];
    try {
      const data = toData(token);
      console.log("data from token", data);

      const user = await User.findByPk(data.userId);

      request.user = user;
      next();
    } catch (e) {
      console.log("invalid token", e.message);
      return response.status(401).send("Not authorized");
    }
  }
};

module.exports = { authMiddleware };
