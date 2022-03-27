import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import config from './config.json';
const logger = require('./config/logger');
const routes = require('./routes');

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
initializeDb( db => {

	app.use('/', routes)
	app.server.listen(config.port, () => {
		logger.info(`Started on port ${app.server.address().port}`);
	});
});

export default app;
