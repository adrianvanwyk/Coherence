var express = require('express');
var router = express.Router();

var pageDefaults = {
    menu: true,
    footer: true,
    defaultStyles: true,
    defaultScripts: true
};

/* GET home page. */
router.get('/', function(req, res, next) {
    pageDefaults.title = 'Home || Mont Blanc Financial Services';
    res.render('index', pageDefaults);
});

module.exports = router;