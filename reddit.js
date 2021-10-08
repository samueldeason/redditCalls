const fs = require("fs")
const fetch = require("isomorphic-fetch")

const articleArr = [];

fetch("https://reddit.com/r/popular.json")
    .then(res => res.json())
    .then(async (res) => {
        res.data.children.map((a) => {
            articleArr.push({
                title: a.data.title,
                url: a.data.url,
                aurthor: a.data.author,
            })
        })
        fs.writeFile("popular-articles.json", JSON.stringify(articleArr), () => {
            console.log("articles added to file")
        })
    })


