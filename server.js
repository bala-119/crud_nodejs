const express = require("express");
const routes = require("./routers/UserRouter");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use("/user",routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});