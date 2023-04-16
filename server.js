const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
   console.log(req.method)
   console.log(req.url)
   console.log(req.param)
    fs.readFile('index.html', 'utf-8', (err, data) => {
        
        res.end(data)
    })

    
}).listen(3001, () => {
    console.log('Server Started')
})
