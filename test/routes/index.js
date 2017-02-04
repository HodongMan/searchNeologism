var express = require('express');
var router = express.Router();

var config = require("./config");

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
  	"text" : "text",
  	"meaning" : "meaning",
  	"goods" : 42,
  	"bads" : 21
  });
});

router.get('/:id', function(req, res) {
  let searchData = req.params.id;
  console.log(searchData);
  let data = {
  	"text" : "No Suck Data",
  	"meaning" : "",
  	"goods" : "",
  	"bads" : ""
  };

  config.forEach(function(element, index){
  	console.log(element.searchData);
  	if(element.searchData === searchData){
  		data = element;
  	}
  });

  res.json(data);

});



module.exports = router;
