Question 2:
Q:What is Express?

A:Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Question 3:
Q:Write an server application that listens on localhost:3000 and returns “Welcome to Data
Representation & Querying

A:
 const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to Data
Representation & Querying'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

Question 4:
Q:Add another route point using the Express Framework that will take an argument form
the url path and return hello “argument” for the url http://localhost:3000/hello eg
http://localhost:3000/hello/Ted returns hello Ted

A:
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to Data Representation & Querying'))

app.get('/hello',(req,res) => {res.send('Hello')})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


Question 5:
Q:5. Add a route point /api/movies that will return the following json data:



A:const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to Data Representation & Querying'))

app.get('/api/movies',(req,res) => {
    console.log(req.params.name);
    res.json({"movies":[
        {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ]
        });
    })
    

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  
  Q6
  Q:
  A:
