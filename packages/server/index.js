const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 },
  ]);
});

console.log("oo");

app.listen(PORT, () => {
  console.log(`I am doing great and serving at ${PORT}`);
});
