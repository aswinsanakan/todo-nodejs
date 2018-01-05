var express = require('express');
var app = express();

var todoController = require('./controllers/todoController');

// Set ejs for templating
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

todoController(app);

app.listen(3000);
console.log("Listening to port 3000...");