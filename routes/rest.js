var express = require('express');
var router = express.Router();

// POST: JSON data, install body-parser
// only use the json parser here
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// use the functions in urlServices
var urlService = require("../services/urlService");


router.post('/urls', jsonParser, function (req, res) {
    // longUrl = req.body.longUrl -> directly use the req body parsed by jsonParser
    // var shortUrl = urlService.getShortUrl(req.body.longUrl, req.app.longToShortHash, req.app.shortToLongHash);
    var longUrl = req.body.longUrl;
    var shortUrl = urlService.getShortUrl(longUrl);
    res.json({
        shortUrl: shortUrl,
        longUrl: longUrl
        // longUrl: req.body.longUrl
    });
});

router.get("/urls/:shortUrl", function (req, res) {
    var shortUrl = req.params.shortUrl;
    var longUrl = urlService.getLongUrl(shortUrl);
    res.json({
        shortUrl: shortUrl,
        longUrl: longUrl
        // longUrl: req.body.longUrl
    });
});

// Exports the router and so it can be USED in server.js
module.exports = router;
