// importing core module Path - comes default with Node
const path = require('path');
// Base file name
console.log(path.basename(__filename));
// Directory name
console.log(path.dirname(__filename));
//Extension name
console.log(path.extname(__filename));
//Pull the whole object
console.log(path.parse(__filename));
//Concat: uses the correct delimiter depending on the env
console.log(path.join(__filename, 'dirname', 'filename'));

