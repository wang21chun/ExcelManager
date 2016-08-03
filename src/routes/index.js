var express = require('express');
var router = express.Router();
var upload = require('../upload/index');
var list = require('../parse/list');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Photo'
    });
});

router.post('/upload', function(req, res, next) {
    upload(req, res, function(err) {
        if (err) res.json(err);
        res.json({});
    });
});

router.get('/list', function(req, res, next) {
    list(function(err, datas) {
        if (err) res.json(err);
        res.json(datas);
    })
})
module.exports = router;
