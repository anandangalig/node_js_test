const EventEmitter = require('events');

//Create class
class MyEventEmitter extends EventEmitter { };

//Init object
const myEmitter = new MyEventEmitter();
//Add event listener
myEmitter.on('event', ()=>{console.log('Event Fired!');})
myEmitter.on('event2', ()=>{console.log('Event TWO Fired!');})

myEmitter.emit('event2');
myEmitter.emit('event');