const http  = require('http');
const fs    = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFileSync(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                console.log(err);
            }
            res.write('TEST');
            console.log(data.toString());
            res.end();
        });
    } else if (req.url === '/about') {
        res.write('About page');
    } else {
        res.writeHead(400);
    }
    res.end();
}).listen(3333, () => {
    console.log('Server started...');
});
