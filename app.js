const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />        
            <title>Hello</title>
        </head>
        <body>
            <h3>Greetings, earthling!</h3>
        </body>
    </html>
    `);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
