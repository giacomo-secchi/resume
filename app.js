const express = require('express');
var path = require('path');
const port = process.env.PORT || 3000;

let indexRouter = require('./routes/index');
let langRouter = require('./routes/languages');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.set('view engine', 'pug');

app.use(express.static('dist'));
app.use(express.static('public'));
app.use('/languages', express.static('languages'));

app.get('/:en', indexRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});