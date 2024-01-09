const express = require('express')
const cors = require('cors');
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

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

app.post('/admin/details', (req, res) => {
  console.log(req.body)
  // const { empID, firstName, lastName, position, manager, Projects } = req.body;
  const empID = req.body.empID;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const position = req.body.position;
  const manager = req.body.manager;
  const Projects = req.body.Projects;
  
  const query = `INSERT INTO details VALUES (${empID},"${firstName}","${lastName}","${position}","${manager}","${Projects}")`;
  console.log(query);
  db.query(query, (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT DETAILS!"})
            }
        }
    )
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


