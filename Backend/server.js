const express = require('express')
const cors = require('cors');
const mysql = require('mysql')
const axios = require('axios');
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

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin/details');
    const data = response.data;
    // Handle the fetched data here
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


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

app.post('/admin/details',async (req, res) => {
  var details = await fetchData();
  // const data = fetchData();
  // console.logdata)
  // const { empID, firstName, lastName, position, manager, Projects } = req.body;
  const empID = req.body.empID;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const position = req.body.position;
  const manager = req.body.manager;
  const Projects = req.body.Projects;
  
  //console.log(details)
  var query = `INSERT INTO details VALUES (${empID},"${firstName}","${lastName}","${position}","${manager}","${Projects}")`;
  console.log(details)
  if (details != undefined) {
    for (let i = 0; i < details.length;i++){
      if (details[i].empID == empID) {
        query = `UPDATE details SET Projects = "${details[i].Projects},${Projects}" WHERE empID = ${empID};`
      }
    }
  }
  {
  console.log(query);
  db.query(query, (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT DETAILS!"})
            }
        }
    )}
})
  
app.post('/admin/details/delete', async (req, res) => {
  console.log(req.body);
  let query = null;
  if(req.body.result == true){
    if (req.body.empID != undefined) {
      query = `DELETE from details WHERE empID=${req.body.empID}`
      res.send({ query })
      console.log(query)

      db.query(query, (err, result) => {
        if(result){
          //res.send(result);
          console.log(result)
            }else{
          console.log({message: "NOT DELETED"})
            }
      })
    }
  }

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


