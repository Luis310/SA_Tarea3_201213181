const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios= require('axios');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.post('/cocina', (req, res) => {

    axios.post('http://localhost:8082/motorista', {
    pedido: req.body.pedido
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log("MENSAJE DE PARTE DE COCINA:");
  console.log('SE RECIBE EL PEDIDO DE: '+req.body.pedido+' Y SE COMIENZA A PREPARAR');
  console.log('SE MANDA EL PEDIDO A MOTORISTA');

});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server2 listening on port ${PORT}...`);
});