var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/create/', function (req, res, next) {});

router.post('/create/', function (req, res, next) {});

router.get('/:customer_id/', function (req, res, next) => {});

router.get('/:customer_id/subscriptions/', function (req, res, next) {});

router.get('/:customer_id/bookings/', function (req, res, next) {});

router.get('/:customer_id/edit/')

router.post('/:customer_id/edit/', function (req, res, next) {});

router.post('/:customer_id/delete/', function (req, res, next) {});

module.exports = router;
