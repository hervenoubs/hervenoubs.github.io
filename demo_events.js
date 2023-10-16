const fs = require('fs');

const writeStream = fs.createWriteStream('file.txt');

writeStream.on('finish', () => {
  // The file has been saved successfully.
  // Send an email to the user.
});

writeStream.write('This is the content of the file.');
writeStream.end();