var express = require('express');
var app = express();
app.use(express.static('public'))
app.get("/", (req, res) => { res.send("Namaste!❤️"); });
app.get("/product", (req, res) => {
    var p = { "id": 1, "title": "Gerbera", "description": "Wedding Flower", "unitprice": 50, "quality": 7000 };
    res.send(p);
});
app.listen(9000);
console.log("App is listening on port 9000");
