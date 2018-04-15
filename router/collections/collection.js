// router/routes/collection.js
var express = require('express');

// router for ==> /subcategories
var router = express.Router();

// GET /subcategories
router.get('/', function (req, res) {
    res.status(200).send("Received GET request at http://localhost:3000/collection");
});

module.exports = router;
