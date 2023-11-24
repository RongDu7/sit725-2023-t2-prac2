var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'));

app.get('/addTwoNumbers/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 + num2;
  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log("App listening to: "+port);
});

