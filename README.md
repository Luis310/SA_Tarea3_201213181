# SA_Tarea2_201213181

La tarea 2 consiste en una pequeña orquestacion y simulación de servicios.

Para poder llevar a cabo esta simulación se hicieron **3 servidores en Node.js**


>-Servicio web para cliente

>-Servicio web para restaurante

>-Servicio web para motorista

Para el web service del cliente se utilizo lo siguiente:

	const express = require('express');
	const port = 8080;
	const app = express();
	var cors = require('cors');

	const bodyParser = require('body-parser');
	const routes = require('./routes/routes');


	app.use(bodyParser.json());


	app.use(bodyParser.urlencoded({
    	extended: true,
	}));

	routes(app);

	const server = app.listen(port, (error) => {
    	if (error) return console.log(`Error: ${error}`);
 
    	console.log(`Server listening on port ${server.address().port}`);
	});


Las rutas utilizadas fueron de tipo ***POST***

Para poder recibir el pedido se utilizo: 

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


Cabe destacar que se utilizo "Axios" para poder simular un cliente en el navegador, en este caso
al recibir el pedido por parte del cliente, este se envío a la cocina por medio de otra petición
**POST**


Finalmente la pequeña aplicacion hecha en Angular solo funciona como disparadora para los 3 servicios. 

![Home](img/a1.png)