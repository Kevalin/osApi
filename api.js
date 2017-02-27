var http   = require('http')
var system = require('system')
var url    = require('url')
var util   = require('util')

var createServer = http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname.slice(1)
  var data = system(pathname)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(data, 'utf8')
})

createServer.listen(process.argv[2] || 8080, function(err) {
  if (err) {
    util.log('[ Error ] start osApi', err); return
  }
  util.log('[ Info ] start osApi success on 8080')
})