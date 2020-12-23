const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

// motor de view - tudo que for html
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const index = {
        avatar_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02hPpuOZnTphNKn3Fws3iug8jU-RgpC5AJw&usqp=CAU",
        name: "Vegeta ",
        role: "Principe do planeta Vegeta",
        description: "Personagem que demonstra seu poder atravez de bastante treinamentos e esforcos",
        link: [
            {name: "Github", url: "https://github.com/th1ago/"},
            {name: "Facebook", url: "https://github.com/th1ago/"},
            {name: "Linkedin", url: "https://github.com/th1ago/"}
        ]
    }

    return res.render("index", {index})
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