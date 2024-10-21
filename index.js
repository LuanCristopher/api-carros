const express = require('express');
const app = express();
const port = 8080;

// Dados em memória
let produtos = [
  { id: 1, nome: 'Carro A' },
  { id: 2, nome: 'Carro B' },
  { id: 3, nome: 'Carro C' },
];

// Rota GET para obter todos os produtos
app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}/api/produtos`);
});

app.use(express.json());  

// Rota POST 
app.post('/api/produtos', (req, res) => {
  const novoProduto = {
    id: produtos.length + 1,
    nome: req.body.nome
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});