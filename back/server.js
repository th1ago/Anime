const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

// motor de view - tudo que for html
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    const index = {
        avatar_url:"https://avatars0.githubusercontent.com/u/11079167?s=460&u=21129c4df5552a5d149117ed085b0f117f9225f8&v=4",
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