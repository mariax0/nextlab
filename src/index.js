var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello, Web!");
    res.end();
  })
  .listen(8888);
