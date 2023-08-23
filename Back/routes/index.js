var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', async function(req, res, next) {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return res.json(data);
});

module.exports = router;
