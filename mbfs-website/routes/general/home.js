var express = require('express');
var router = express.Router();

var controller = require('../../controllers/general/HomeController');

router.get('/', controller.home_get);
router.get('/home', controller.home_get);