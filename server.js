const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.MONGO_URI.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose.connect(DB).then(() => {
  console.log("DB connection sucessful.");
});

const PORT = process.env.PORT || 8080;
const server = app.listen(`${PORT}`, () => {
  console.log(`Server is up and runnig at port : ${PORT}`);
});
