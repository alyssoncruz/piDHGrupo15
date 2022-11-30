const express = require('express');
const ProdutoController = require('../controllers/ProdutoController')

const router = express.Router();

/* GET users listing. */
router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar', (rep, res)=>res.send("Deletando um protudo"));



/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;