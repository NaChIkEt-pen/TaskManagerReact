const express = require('express')
const cors = require('cors');
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nachiket',
    database: 'taskapp'
})

app.get('/admin/details', (req, res) => {
  const sql = 'SELECT * FROM details';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data)
  })
})


app.get('/admin/logindetails', (req, res) => {
  const sql = 'SELECT * FROM logindetails';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data)
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


