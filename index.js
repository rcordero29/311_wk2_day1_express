const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

const { users } = require('./state');

/* BEGIN - create routes here */
app.get('/hello', function (req, res) {
  res.send('hi');
});
app.get('/hello/:name', function (req, res) {
  let input = req.params.name;
  res.send('hi ' + input);
});

app.post('/hi', function (req, res) {
  let input = req.body;
  console.log('body', input);
  res.send('hi ' + input.name);
});

let list = [];

app.get('/list', function (req, res) {
  res.json(list);
});
/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
