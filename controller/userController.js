const AppError = require("../utils/appError");
const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.createUser = catchAsync(async (req, res, next) => {
  // const newUser = await User.create(req.body)
  res.status(201).json({
    status: "sucess",
    // data : {
    //   user : newUser
    // }
  }); //201 -- Created
});

exports.getAllUsers = catchAsync((req, res, next) => {
  res.status(200).json({
    status: "success",
    // results: users.length,
    // data: { users: users },
  });
});

exports.getUserById = catchAsync((req, res, next) => {
  console.log(req.params);
  // if (id > users.length) {
  //   return res.status(404).json({
  //     status: "fail",
  //     message: "Invalid ID",
  //   });
  // }
  const id = req.params.id * 1;
  // const user = users.find((el) => el.id === id);
  // if(!user){
  //   return next(new AppError('No user found with this id', 404))
  // }
  // res.status(200).json({
  //   status: "success",
  //   data: { user },
  // });
});
