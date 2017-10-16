var styles = require('../content/styleBundle');

var pageDefaults = {
    menu: true,
    footer: true,
    styles: styles
};

exports.home_get = function(req, res) {
    pageDefaults.title = 'Home || Mont Blanc Financial Services';
    res.render('index', pageDefaults);
};