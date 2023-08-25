const express = require('express'); //o express cria um servidor pra renderizar as paginas ejs
const app = express(); //instanciando o express e guardando na variavel app

app.set('view engine', 'ejs'); //setando o ejs como view engine

app.get('/', function (req, res) {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'E',
      message: 'JS usa JavaScript para renderizar HTML'
    },  
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'prender EJS é simples'
    },
    {
      title: 'I',
      message: 'nstalar o EJS é fácil'
    },
    {
      title: 'S',
      message: 'imples'
    }
  ];
  
const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript';

  res.render('pages/index', {
    qualitys: items,
    subtitle: subtitle
    }); //o que vou dar de resposta é renderizar o index, não precisa colocar ejs porque já especifiquei em cima
}); //criando uma rota para a pagina index.ejs
//ele já espera que o index esteja dentro da pasta views

app.get('/sobre', function (req, res) {
  res.render('pages/about');
})
app.listen(8080); //criando um servidor na porta 8080
console.log('Servidor rodando na porta 8080'); //mostrando no console que o servidor está rodando na porta 8080