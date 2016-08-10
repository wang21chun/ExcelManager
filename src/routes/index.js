var express = require('express');
var router = express.Router();
var upload = require('../upload/index');
var list = require('../parse/list');
var zyc = require('../parse/zyc');
var zycList = require('../parse/zycList');
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


router.post('/data/upload3', function(req, res, next) {
    zyc(req.body);
    res.send('ok');
})

router.get('/zyc/list', function(req, res, next){
    zycList(function(err, datas){
        if(err) res.json(err);
        res.json(datas);
    })
})


module.exports = router;
