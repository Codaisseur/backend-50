const express = require("express");
const PORT = 4001;

const userRouter = require("./routers/user");
const listRouter = require("./routers/todolists");
const authRouter = require("./routers/auth");
const { logginMiddleware } = require("./middlewares");

const app = express();

// Middlewares at APPLICATION LEVEL
app.use(express.json()); // body-parser middleware { req, res }
app.use(logginMiddleware); // our middleware

// Routers
app.use("/users", userRouter);
app.use("/lists", listRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log("listening on 4001"));
