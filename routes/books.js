var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/create/', function (req, res, next) {});

router.post('/create/', function (req, res, next) {});

router.get('/:book_id/', function (req, res, next) => {});

router.get('/:book_id/bookings/', function (req, res, next) {});

router.get('/:book_id/edit/')

router.post('/:book_id/edit/', function (req, res, next) {});

router.post('/:book_id/delete/', function (req, res, next) {})

module.exports = router;
