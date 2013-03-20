var connect = require('connect');

var port = process.env.PORT || 8080;

connect.createServer(
    connect.static(__dirname)
).listen(port);

console.log('Server started! Listening on port 8080');