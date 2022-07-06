const http = require('http')

const server = http.createServer((req, res) => {
     console.log(req.url, req.method) //Accessing request properties
     //process.exit() //Stopped listening the event

     res.setHeader('Content-Type', 'text/html') //We're giving a response to the server.
     //In this case, the response firstly sets a new header (content-type) and its value (text/html)

     res.write('<html>')
     res.write('<head>')
     res.write('<title> Title! </title>')
     res.write('</head>')
     res.write('<body>')
     res.write('<h1> This is my server! </h1>')
     res.write('</body>')
     res.write('</html>')
     res.end()
})

server.listen(3000)