const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.post('/motorista', (req, res) => {
  
   res.status(201).send(`${req.body.pedido}`);
});


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server3 listening on port ${PORT}...`);
});