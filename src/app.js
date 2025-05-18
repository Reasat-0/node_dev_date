const exp = require("express");

const app = exp();

const port = 3000;

app.get("/user-profile", (req, res) => {
  res.send({
    name: "HEloo",
    age: 123,
  });
});

app.post("/user-profile", (req, res) => {
  res.send({
    status: 200,
    message: "Success",
  });
});

// Routes...

app.use("/test", (req, res) => {
  res.send("Hello from the server " + port);
});

app.listen(port, () => {
  console.log("Server running successfully");
});
