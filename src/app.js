const exp = require("express");

const app = exp();

const port = 3000;

app.get("/user/:uid/:customerId/:date", (req, res) => {
  console.log(req.params);

  res.send({
    name: "HEloo",
    age: 123,
  });
});

app.get("/user-profile", (req, res) => {
  console.log(req.query);

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

// Complex route patterns....
app.get("/ab?c", (req, res) => {
  // will work for abc or ac... ? mark makes b optional...
  res.send({
    name: "HEloo",
    age: 123,
  });
});
app.get("/ab+c", (req, res) => {
  // will work for abbbbbbbbbbbc or abc... + mark tells that you can write any amount of b keeping a and c on both side...
  res.send({
    name: "HEloo",
    age: 123,
  });
});

app.get("/ab*c", (req, res) => {
  // will work for ab--anything-c or ... * mark tells that you can write anything after b keeping ab and c on both side...
  res.send({
    name: "HEloo",
    age: 123,
  });
});

app.get("/a(bc)?d", (req, res) => {
  // will work for ad. Cause b and c has become optional in group
  res.send({
    name: "HEloo",
    age: 123,
  });
});

// Routes...

app.use("/test", (req, res) => {
  res.send("Hello from the server " + port);
});

app.listen(port, () => {
  console.log("Server running successfully");
});
