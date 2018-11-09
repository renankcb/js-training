var http = require('http');
var mitraSecondQuestion = require('./mitra-second-question')

async function onRequest(req, resp) {
    resp.writeHead(200, {'Content-Type': 'application/json'});
    await resp.write(mitraSecondQuestion.init());
    resp.end();
}

http.createServer(onRequest).listen(3000);