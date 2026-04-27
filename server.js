const dotenv = require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, (_) => {
  console.log(`Server running on port ${PORT}`);
});
