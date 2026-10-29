
const express = require("express");

const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
  res.send("TaskFlow API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

