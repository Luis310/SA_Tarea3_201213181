// Load the MySQL pool connection

const axios = require('axios');

const router = app => {

    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    next();
    });
    

 app.post('/cliente', (request, response) => {
  response.header("Access-Control-Allow-Origin","*");
  response.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
  response.status(201).send(`Pedido realizado a cocina de: ${request.body.pedido}`);

  axios.post('http://localhost:8081/cocina', {
    pedido: request.body.pedido
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log("PEDIDO ENTRANTE DE PARTE DEL CLIENTE: "+ request.body.IDCliente);
  console.log("LA ORDEN ES DE: "+request.body.pedido+" Y ES ENVIADO A COCINA");
});
    
}


// Export the router
module.exports = router;