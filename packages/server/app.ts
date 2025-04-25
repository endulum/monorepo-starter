import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 },
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.warn(`⚡️ server starting at http://localhost:${PORT}`);
});
