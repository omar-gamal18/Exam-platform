const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log("DB connected successfully");
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
