fs = require('fs');

module.exports.writeLog = (line) => {
    text = line + '\r\n';
    fs.appendFile('frontLogs.txt', text, function(err) {
        if (err) throw err;
    });
    console.log("write" + line);
};