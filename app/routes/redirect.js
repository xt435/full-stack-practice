var express = require('express');
var router = express.Router();
var urlService = require("../services/urlService");
var statsService = require("../services/statsService");
var path = require('path');

// no need to parse json, get rid of jsonParser here
router.get('*', function (req, res){
    var shortUrl = req.originalUrl.slice(1); // originalUrl = "/XXX" instead of "XXX", which is what we need
    // var longUrl = urlService.getLongUrl(shortUrl, req.app.shortToLongHash);
    urlService.getLongUrl(shortUrl, function (url) {
        if (url) {
            res.redirect(url.longUrl);
            statsService.logRequest(shortUrl, req);
        } else {
            res.sendFile("404.html", { root: path.join(__dirname, '../public/views/')});
        }
    });
});

module.exports = router;
