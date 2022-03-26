const app = require('express')();
const cors = require('cors');
const { data } = require('./data');

app.use(cors());

app.get('/product-list', (req, res) => {
  res.status(200).send(data);
})

app.listen(8080, () => {
  console.log("server is running on port 3000");
})