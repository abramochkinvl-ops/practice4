const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.use(express.json());

app.get('/echo', (req, res) => {
  res.status(200).json({ msg: "hello" });
});

app.post('/echo', (req, res) => {
  const { message } = req.body;
  res.status(200).json({ message });
});

app.listen(port, () => console.log(`Server running on port ${port}`));