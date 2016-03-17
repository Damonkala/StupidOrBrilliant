'use strict';

let express = require('express')
let router = express.Router();


router.post('/', function(req, res){

})
router.get('/', function(req, res){
res.send("Hello")
})

module.exports = router;
