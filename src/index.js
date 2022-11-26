import express from 'express'
const app = express()
const { PORT = 3000 } = process.env
import {connection} from './db.js'

// app.use(express.json())
app.get('/', function (req, res) {
  connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    res.json({results})
  }
);
})
app.listen(3000, ()=>{
console.clear()
console.log('server on port', PORT)
})