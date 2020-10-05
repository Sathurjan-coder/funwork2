
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var schoolController = require("./controllers/schoolController.js");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.listen(process.env.PORT || 8000, function () {
    console.log("Started listening on port", 8000);
});

// Connect to mongodb database
mongoose.connect("mongodb://abilakshan:365463999@testcluster-shard-00-00.dzprx.mongodb.net:27017,testcluster-shard-00-01.dzprx.mongodb.net:27017,testcluster-shard-00-02.dzprx.mongodb.net:27017/sathu?ssl=true&replicaSet=atlas-1tufku-shard-0&authSource=admin&retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true  });
