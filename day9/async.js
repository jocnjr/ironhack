const fs = require('fs');

// SYNCHRONOUS
// let content = fs.readFileSync('./odyssey.pdf','utf8');
// console.log(content);

// ASYNC

fs.readFile('./odyssey.pdf', function read(err, data) {
  if (err) {
      throw err;
  }
  // content = data;

  console.log(data);  

});
// var textSize = ;
// console.log(textSize);