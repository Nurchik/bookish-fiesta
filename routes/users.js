var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/create/', function (req, res, next) {});

router.post('/create/', function (req, res, next) {});

router.get('/:user_id/', function (req, res, next) => {});

router.get('/:user_id/edit/')

router.post('/:user_id/edit/', function (req, res, next) {});

router.post('/:user_id/delete/', function (req, res, next) {});

module.exports = router;
