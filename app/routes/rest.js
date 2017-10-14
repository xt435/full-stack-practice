var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");

router.post('/urls', jsonParser, function (req, res) {
    // longUrl = req.body.longUrl -> directly use the req body parsed by jsonParser
    var longUrl = req.body.longUrl;
    urlService.getShortUrl(longUrl, function (url) {
        res.json(url);
    });
});

router.get("/urls/:shortUrl", function (req, res) {
    var shortUrl = req.params.shortUrl;
    urlService.getLongUrl(shortUrl, function (url) {
        res.json(url);
    });
});

// Exports the router and so it can be USED in server.js
module.exports = router;
