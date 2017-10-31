"use strict";
var restify = require('restify');
var MessageServer = (function () {
    function MessageServer() {
        this.messages = [];
    }
    MessageServer.prototype.start = function () {
        var _this = this;
        var server = restify.createServer();
        server.use(restify.plugins.bodyParser());
        server.post('/', function (req, res, next) {
            console.log('POST reqeust', req.body);
            _this.messages.push(req.body.message);
            res.send('{}');
            return next();
        });
        server.get('/', function (req, res, next) {
            console.log('GET request');
            res.send(_this.messages);
            return next();
        });
        server.listen(8080, function () {
            console.log('listening');
        });
    };
    return MessageServer;
}());
exports.MessageServer = MessageServer;
new MessageServer().start();
