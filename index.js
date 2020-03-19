var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




































//importando frameworks node

//const express = require ('express');

//const app =express();

//responde com um "Hello World" para requisções feitas para a ropta raiz "/"

//app.get ('/'function (req, res){

  //  res.send ("Hello Wolrd");
//});

//escutando na porta 3000

//app.list(proccess.ENV.PORT || 3000);

//module.exports = app

//

