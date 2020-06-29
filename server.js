const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/ZB15062020/dist/'));
app.get('*', function(req, res) {
  // res.sendFile(path.join(__dirname + '/dist/zb15062020/index.html'));
  res.sendFile('./ZB15062020/dist/index.html');
});
app.listen(process.env.PORT || 8080);
