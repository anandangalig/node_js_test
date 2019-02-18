const Logger = require('./logger');

const logger = new Logger();

//the event handler for 'message' event is defined here:
logger.on('message', data => console.log('Called listener: ', data));

//log method is set on logger.js to emit an event 'message'
logger.log('my message');