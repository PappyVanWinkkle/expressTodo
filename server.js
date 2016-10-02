var express = require('express');
var app = express();
var router = express.Router();




// Route
app.get("/*", function(req, res) {
    res.render('home.ejs');
    
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});