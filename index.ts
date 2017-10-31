const restify = require('restify');

export class MessageServer {
	messages = [];

	start() {
		const server = restify.createServer();

		server.use(restify.plugins.bodyParser());

		server.post('/', (req, res, next) => {
			console.log('POST reqeust', req.body);
			this.messages.push(req.body.message);
			res.send('{}');
			return next();
		});

		server.get('/', (req, res, next) => {
			console.log('GET request');
			res.send(this.messages);
			return next();
		});

		server.listen(8080, () => {
			console.log('listening');
		})
	}
}

new MessageServer().start();
