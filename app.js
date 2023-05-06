require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
