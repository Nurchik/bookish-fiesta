var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {});

router.get('/create/', function (req, res, next) {});

router.post('/create/', function (req, res, next) {});

router.get('/:author_id/', function (req, res, next) => {});

router.get('/:author_id/books', function (req, res, next) => {});

router.get('/:author_id/edit/')

router.post('/:author_id/edit/', function (req, res, next) {});

router.post('/:author_id/delete/', function (req, res, next) {});

module.exports = router;
