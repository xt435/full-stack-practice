var express = require("express");
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require("./routes/index");

var port = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"));

app.use("/api/tinyUrl_V2", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl",redirectRouter);


// app.listen(3000, function(){
//    console.log("The tinyUrl Server Has Started!");
// });

app.listen(port, function() {
    console.log(`The tinyUrl Server is up on port ${port}`);
});
