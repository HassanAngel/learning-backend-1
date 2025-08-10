// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Allow frontend to call backend
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: "my name is muhamamd hassan how are you guys!" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
