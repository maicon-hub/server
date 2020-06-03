import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json({ message: 'Hello word'})
});

app.listen(3333);
