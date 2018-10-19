
var express = require("express");
var buffer = require("buffer");
var router = express.Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
    
router.get("/hello",
	(req, res) => {
		res.send({ express: "Welcome to moneybutton store api" });
    });

router.get("/item", jsonParser,
	(req, res) => {
        //in our store there is only one item
	});

module.exports = router;