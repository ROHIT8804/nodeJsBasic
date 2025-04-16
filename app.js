const http = require("http")
const event = require("./eventModule")

// console.log(event)
event.eventEmitter.emit("sum", 5, 10)
event.triggerDiv(10, 2)

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello Node.js!")
})

// server.listen(3000, ()=>console.log("Server running on port 3000"))