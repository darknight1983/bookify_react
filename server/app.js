var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 5000;


app.use(express.static(path.resolve(__dirname, '../react-ui/build')));



app.get('/api', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.send({message: 'Custom API ready for building'});
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../bookify-ui/build', 'index.html'));
});


app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);
});
