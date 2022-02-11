const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({
    message: 'halo',
  });
});

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));
