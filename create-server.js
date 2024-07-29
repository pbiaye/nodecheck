// Import require
 http = require("http");

// Create server
 http.createServer((req,res)=> {
    res.writeHead(200, {
        "content-type":"text/html"
    })
    res.write(" <h1>Bonjour Node !!!!</h1>\n")
    res.end()
 }).listen(3000, ()=> {
    console.log("Server is running")
})

