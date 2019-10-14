const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

//app use 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//app GETS + POSTS
app.get('/', (req, res) => res.send('Welcome to Data Representation & Querying'))

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.get('/name', (req, res) => {
    console.log('route called');
    console.log(req.query.lastname);
    res.send('Hello ' + req.query.firstname + " " + req.query.lastname);
})

app.post('/name', (req, res) => {
    console.log("post method");
    console.log(req.body.firstname + req.body.lastname);
    res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
    })

    app.get('/test', (req, res) => { res.sendFile(path.join(__dirname + '/index.html')) }
    )

    app.get('/api/movies', (req, res) => {
        console.log(req.params.name);
        const movies = [{
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ]

        res.json({ movies: movies })
    })



    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
