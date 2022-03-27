
const mongoose = require('mongoose');
import config from './config.json';
const logger = require('./config/logger');

export default async callback => {
	// connect to a database if needed, then pass it to `callback`:
	
const db = await mongoose.connect(config.mongoDbUrl).then(() => {
	logger.info('Connected to MongoDB');
	});

callback(db);
}
