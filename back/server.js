const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

// motor de view - tudo que for html
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/anime", function(req, res) {
    return res.render("anime", {items: videos})
})

// server.get("/img", function(req, res) {
//     return res.render("vegeta")
// })

server.listen(5000, function() {
    console.log("server run")
})