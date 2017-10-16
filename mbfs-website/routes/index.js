var express = require('express');
var router = express.Router();
var styles = require('../content/styleBundle');

var pageDefaults = {
    menu: true,
    footer: true,
    styles: styles
};

/* GET home page. */
router.get('/', function(req, res, next) {
    pageDefaults.title = 'Home || Mont Blanc Financial Services';
    res.render('index', pageDefaults);
});

module.exports = router;
