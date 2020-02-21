const axios = require('axios');

const router = app => {

    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    next();
    });
    
 //PEDIDO ENTRANTE DESDE LA APLICACION AL CLIENTE
 app.post('/iniciopedido', (request, response) => {
  response.header("Access-Control-Allow-Origin","*");
  response.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
  //response.status(201).send(`Pedido realizado a cocina de: ${request.body.pedido}`);

  axios.post('http://localhost:8080/cliente', {
    pedido: request.body.pedido
  })
  .then(function (response) {
    console.log('El pedido de '+response.data+' ya se guardo en el cliente');
    console.log('Listo para ser enviado a COCINA');

    axios.post('http://localhost:8081/cocina', {
    pedido: response.data
  })
  .then(function (response2) {
    //console.log(response2.data);
    console.log('LA COCINA RECIBIO EL PEDIDO DE: '+response2.data);
    console.log('Listo para ser enviado al motorista');
    

    axios.post('http://localhost:8082/motorista', {
    pedido: response2.data
  })
  .then(function (response3) {
    //console.log(response2.data);
    console.log('YA SE LE ASIGNO AL MOTORISTA EL PEDIDO DE: '+response3.data);
    console.log('BUEN PROVECHO');
    
  })
  .catch(function (error) {
    console.log(error);
  });


  })
  .catch(function (error) {
    console.log(error);
  });

  })
  .catch(function (error) {
    console.log(error);
  });
  //console.log("PEDIDO ENTRANTE DE PARTE DEL CLIENTE: "+ request.body.IDCliente);
});
    
}


// Export the router
module.exports = router;