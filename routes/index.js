var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
/*
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Express app con NEtlify!</h1>');
  res.end();
});
*/

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

module.exports = router;
