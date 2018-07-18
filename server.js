const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.send('Servidor Express Iniciado !!!');
  });


app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
  console.log('Servidor Express Iniciado !!!');
});

//https://hackernoon.com/the-wonderful-world-of-web-components-e4c1675c6901
//https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
//https://carlosazaustre.com/como-crear-webcomponent-de-forma-nativa/
//https://www.paradigmadigital.com/dev/stencil-js-crear-web-components-nunca-fue-tan-facil/

