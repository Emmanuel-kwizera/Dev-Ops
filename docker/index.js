const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there, I am a user");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
