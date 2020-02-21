const express = require('express');
const port = 8084;
const app = express();
var cors = require('cors');

const bodyParser = require('body-parser');
const routes = require('./routes/routes');


// Use Node.js body parsing middleware
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});