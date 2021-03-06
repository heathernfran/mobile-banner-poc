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

// var server = http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content-type': 'text/html; charset=utf-8;'
//   });
//   res.end('end response');
// });

// server.listen(1337);

app.listen(app.get('port'), function() {
  // var host = server.address().address;
  // var port = server.address().post;
  console.log('node app running on port ' + app.get('port'));
});
