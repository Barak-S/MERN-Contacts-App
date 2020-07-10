var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.send("hello barak")
});

router.get('/anwen', function(req, res){
  res.sendFile('/Users/baraksaidoff/Development/code/expressScaffolding/views/Anwen.html')
})

module.exports = router;
