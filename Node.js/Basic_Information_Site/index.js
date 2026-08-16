const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.end(data);
        })
    }else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            res.end(data);
        })
    }else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'contact-me.html'), (err, data) => {
            res.end(data);
        })
    }else {
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            res.end(data);
        })
    }
});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});