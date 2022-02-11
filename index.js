const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const data = [
  {
    name: 'user1',
  },
  {
    name: 'user2',
  },
  {
    name: 'user3',
  },
  {
    name: 'user4',
  },
];

app.get('/', (req, res) => {
  res.send({
    message: 'halo',
    data,
  });
});

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));
