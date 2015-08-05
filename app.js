var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/mobile.html', function(req, res) {
  res.send('mobile.html');
});

app.listen(app.get('port'), function() {
  console.log('node app running on port ' + app.get('port'));
});
