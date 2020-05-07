var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('./public'))

// localhost:300/assets/StyleSheet.css

app.listen(3000);
console.log('You are listening to port 3000');
