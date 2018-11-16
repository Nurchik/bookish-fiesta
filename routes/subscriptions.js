var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/create/', function (req, res, next) {});

router.post('/create/', function (req, res, next) {});

router.get('/:subscription_id/', function (req, res, next) => {});

router.get('/:subscription_id/edit/')

router.post('/:subscription_id/edit/', function (req, res, next) {});

router.post('/:subscription_id/delete/', function (req, res, next) {});

router.get('/types/', function (req, res, next) {});

router.get('/types/:type_id', function (req, res, next) {});

router.get('/types/create/', function (req, res, next) {});

router.post('/types/create/', function (req, res, next) {});

router.get('/types/:type_id/edit', function (req, res, next) {});

router.post('/types/:type_id/edit', function (req, res, next) {});

router.post('/types/:type_id/delete', function (req, res, next) {});

module.exports = router;
