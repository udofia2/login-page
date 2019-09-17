const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 
    'login.html'
    :req.url)

    let extname = path.extname(filePath)

    let contentType = 'text/html'
    switch(extname) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if(err){
            if(err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    res.writeHead(200, {"Content-Type": "text/html"})
                    res.end(data, 'utf-8')
                })
            } else {
                res.writeHead(500)
                res.write(`Server Error: ${err.code}`)
            }
        } else {
            res.writeHead(200, contentType)
            res.end(data, 'utf-8')
        }
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))