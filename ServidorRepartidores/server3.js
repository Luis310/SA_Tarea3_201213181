const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.post('/motorista', (req, res) => {
  
  console.log("MOTORISTA:");
  console.log('SE ASIGNA MOTORISTA PARA EL PEDIDO DE '+req.body.pedido);
  console.log('PEDIDO VA EN CAMINO...PROVECHO!');

});


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server3 listening on port ${PORT}...`);
});