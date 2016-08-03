var express = require('express');
var router = express.Router();
var upload = require('../upload/index');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Photo'
    });
});

router.post('/upload', function(req, res, next) {
    upload(req, res, function(err, data) {
        if (err) res.json(err);
        res.json(data);
    });
});
module.exports = router;
