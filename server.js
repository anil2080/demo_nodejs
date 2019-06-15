const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// use css file
app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('Hello World!')
  // NEW CODE
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})