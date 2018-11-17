var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {});

router.get('/create/', function (req, res, next) {});

router.post('/create/', function (req, res, next) {});

router.get('/:publisher_id/', function (req, res, next) => {});

router.get('/:publisher_id/books', function (req, res, next) => {});

router.get('/:publisher_id/edit/')

router.post('/:publisher_id/edit/', function (req, res, next) {});

router.post('/:publisher_id/delete/', function (req, res, next) {});

module.exports = router;
