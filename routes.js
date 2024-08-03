const fs = require('fs');
const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    
    if (url === "/") {
        let message = fs.readFileSync('message.txt');
        {
            res.write('<html>');
            res.write('<head>');
            res.write('<title>my page of node js</title>');
            res.write('</head>');
            res.write('<body>');
            res.write(`<h1> ${message} </h1>`);
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            res.write('</body>');
            res.write('</html>');
        }

        return res.end();
    }

    if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

module.exports=requestHandler;