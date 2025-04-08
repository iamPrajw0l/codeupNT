// const http =require('http');

// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hey, This is my first js program\n');
// }).listen(3000);

// console.log('Server running on port 3000')

/*
const http = require('http');

// Create the server
http.createServer((req, res) => {
    // Check the URL of the incoming request
    if (req.url === '/about') {
        // Handle the /about route
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const projectDetails = {
            name: "AcquLeayner",
            description: "A digital platform to increase awareness, promote events & functional as digital portfolio for merchandis",
            version: "1.0.0"
        };
        res.end(JSON.stringify(projectDetails));
    } else {
        // Default response for other routes
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hey, This is my first JS program\n');
    }
}).listen(3000);

*/

const http = require('http');

// Create the server
http.createServer((req, res) => {
    // Check the URL of the incoming request
    if(req.url==='/'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hey, This is my first JS program\n');
    }
    else if (req.url === '/about') {
        // Handle the /about route
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About AcquLeayner</title>
            </head>
            <body>
                <h1>About AcquLeayner</h1>
                <p><strong>Project Name:</strong> AcquLeayner</p>
                <p><strong>Description:</strong> A digital platform to increase awareness, promote events, and function as a digital portfolio for merchandise.</p>
                <p><strong>Version:</strong> 1.0.0</p>
            </body>
            </html>
            `);
    }
}).listen(3000);
console.log('Server running on port 3000')