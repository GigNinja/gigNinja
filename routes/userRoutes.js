const express = require("express");
const userController = require("./../controller/userController");
const authController = require("./../controller/authController");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/verifyEmail", authController.emailVerificationStep1);
router.post("/verifyEmail/:token", authController.emailVerificationStep2);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/resetPassword", authController.resetPassword);

router.route("/:id").get(userController.getUserById);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports = router;
