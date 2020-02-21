const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios= require('axios');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.post('/cocina', (req, res) => {

 res.status(201).send(`${req.body.pedido}`);

});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server2 listening on port ${PORT}...`);
});