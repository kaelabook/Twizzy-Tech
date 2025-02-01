// /server/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // To handle JSON requests

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Dummy endpoint for login (no actual DB yet)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(400).json({ message: "Login failed!" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
