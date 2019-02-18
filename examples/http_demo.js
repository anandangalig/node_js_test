const http = require('http');

//Create server object
http.createServer((req, res) => {
    //write response
    res.write('Hello Node.js!');
    res.end();
}).listen(5000, () => {
    console.log('Server is up and running...');
});