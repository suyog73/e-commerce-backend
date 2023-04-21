const express = require("express");
const cors = require("cors");
const connectDatabase = require('./db/config')
const app = express();

const userRouter = require("./routers/user_router");
const projectRouter = require("./routers/product_router");


app.use(express.json());
app.use(cors());
connectDatabase();

app.use("/user", userRouter);
app.use("/product", projectRouter);


app.listen(5000);
