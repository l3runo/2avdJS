var router = require('express').Router();
var Product = require('../model/Product');
var { initial } = require('../config');

router.use((req, res, next) => {
  console.log(`${new Date().toDateString()} ${new Date().toLocaleTimeString()} Controle  de Estoque da Empresa ABC => [${req.method}] ${req.path}`);
  next();
});

router.get('/', (req, res) => {
  return res.json(initial);
});

router.get('/produtos', (req, res) => {
  return Product.index(req, res);
});

router.get('/produtos/:id', (req, res) => {
  return Product.show(req, res);
});

router.post('/produtos', (req, res) => {
  return Product.store(req, res);
});

router.put('/produtos/:id', (req, res) => {
  return Product.edit(req, res);
})

router.delete('/produtos/:id', (req, res) => {
  return Product.destroy(req, res);
});

router.put('/produtos/:id/complemento', (req, res) => {
  return Product.complemento(req, res);
});

module.exports = router;
