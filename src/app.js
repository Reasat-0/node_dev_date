const express = require("express");

const app = express();

app.listen(8000, () =>
  console.log("Server is running successfully on port 8000...")
);

app.use("/posts", (req, res) => {
  res.send("Response for /posts...");
});

app.use("/profile", (req, res) => {
  res.send("Response for /profile...");
});

app.use("/", (req, res) => {
  res.send("Hello from the server root");
});
