const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const userRouter = require("./routes/userRoutes");
const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
// console.log(app.get('env'));
// console.log(process.env);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Server is up and running</h1>");
});

// 3) ROUTES
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: "fail",
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });

  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.statusCode = 404;
  // err.status = "fail";
  // next(err)

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
// app.use((err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "error";

//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message,
//   });
// });

module.exports = app;
