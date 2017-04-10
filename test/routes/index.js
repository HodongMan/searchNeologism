const express = require('express');
const router = express.Router();

const config = require("./config");

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
  let data = {
  	"text" : "No Suck Data",
  	"meaning" : "",
  	"goods" : "",
  	"bads" : ""
  };

  config.forEach(function(element, index){
  	if(element.searchData === searchData){
  		data = element;
  	}
  });

  res.json(data);

});



module.exports = router;
