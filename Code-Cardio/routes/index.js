var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setdata', async (request, response) => {
  console.log("request: ", request)
  console.log("request body: ", request.body)
  console.log("response: ", response)
  console.log("response body: ", response.body)
  response.redirect('/')
  response.end();
});

module.exports = router;