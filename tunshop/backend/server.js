const express = require('express')
const app = express()

const bodyParser = require('body-parser')


var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

// app.use(express.static('public'))

const request = require('request');
const port = 5050
const mysql = require("mysql");
const Promise = require("bluebird");

const database = "test"

const connection = mysql.createConnection({
  user: "username",
  password: `Password123!"#`,
  host: "127.0.0.1"
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() =>
    console.log(`Connected to ${database} database as ID ${db.threadId}`)
  )
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))



app.post('/postTest', (req, res) => {
   
  let title = req.body.title
  let body = req.body.body

  let query = "INSERT INTO Blog1 (Title, Body) VALUES (?,?) "
  
  db.query(query, 
    [title, body ], 
    (err, result)=> {
    if (err){
      console.log(err)
    } else {
      res.send(result)
    }
  })

})


app.get('/getWeather/:val', (req, res) => {
    console.log(req.params.val)
    let location = req.params.val
    request(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c577bbce2bf5f128a2a024040caea96b`, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  res.send(body)
});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})