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