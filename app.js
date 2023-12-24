let express = require("express");

let app = express()
let path = require("path")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* GET home page. */
app.get('/', function(req, res) {
    res.render('index')
  });
  app.use(express.static(path.join(__dirname, 'public')));
  app.listen(8080, ()=>{
    console.log("started app")
  })


  module.exports= app;