const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const BookSchema = require("../schemata/BookSchema");

router.get('/', function (req, res, next) {
    let Books = mongoose.model("Book", BookSchema);
    Books.find({}, (err, books) => {

    });
});

router.get('/create/', function (req, res, next) {});

router.post('/create/', function (req, res, next) {});

router.get('/:book_id/', function (req, res, next) => {});

router.get('/:book_id/bookings/', function (req, res, next) {});

router.get('/:book_id/edit/')

router.post('/:book_id/edit/', function (req, res, next) {});

router.post('/:book_id/delete/', function (req, res, next) {})

module.exports = router;
