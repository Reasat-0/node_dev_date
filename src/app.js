const exp = require("express");

const app = exp();

const port = 3000;

app.use((req, res) => {
  res.send("Hello from the server " + port);
});

app.use("/test", (req, res) => {
  res.send("Hello from the server " + port);
});

app.listen(port, () => {
  console.log("Server running successfully");
});
