const express = require('express');
const IndexController = require('../controllers/IndexController');
const router = express.Router();

router.get('/criar', IndexController.criarProduto);
router.get('/deletar', (rep, res)=>res.send("Mostrar lista de Produtos"));


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;

