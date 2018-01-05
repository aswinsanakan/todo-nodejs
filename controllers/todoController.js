var bodyParser = require('body-parser');

var data = [{item: 'Learn stuff'},{item: 'Read Dickens'}, {item: 'Live life'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
  // Get todos
  app.get('/todo', function(req,res){
    res.render('todo', {todos: data});
  });

  // Create todo
  app.post('/todo', urlencodedParser, function(req,res){
    data.push(req.body);
    res.json(data);
  });

  // Delete a todo
  app.delete('/todo/:item', function(req, res){
    data = data.filter((todo) => {
      return (todo.item.replace(/ /g, '') !== req.params.item);
    });
    res.json(data);
  });
};