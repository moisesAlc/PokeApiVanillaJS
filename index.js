
1
2
3
4
5
6
7
8
9
10
11
const path = require('path');
const express = require('express');
 
const app = express();
 
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);
 
const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});