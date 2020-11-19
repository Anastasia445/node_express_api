import express from 'express';
import mysql from './node_modules/mysql2/index.js';
import bodyParser from 'body-parser';
/*import departmentsRoutes from './routes/departments.js'
import managersRoutes from './routes/managers.js'
import employeesRoutes from './routes/employees.js'*/

const app = express();
const PORT = 5000;
 
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "managers",
  password: "password"
})
app.disable('etag');
app.get("/api/getemployees", (req, res) => {
    connection.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/api/getmanagers", (req, res) => {
    connection.query("SELECT * FROM managers", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/api/getdepartments", (req, res) => {
    connection.query("SELECT * FROM departments", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/api/getemployees/:idManager", (req, res) => {
    const idManager = req.params.idManager;
    connection.query(`SELECT * FROM employees WHERE idManager=?`, [idManager], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/api/getmanagers/:idDepartment", (req, res) => {
    const idDepartment = req.params.idDepartment;
    connection.query(`SELECT * FROM managers WHERE idDepartment=?`, idDepartment, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.use(bodyParser.json());

//app.use('/api/getdepartments', departmentsRoutes);
//app.use('/api/getemployees', employeesRoutes);
//app.use('/api/getmanagers', managersRoutes);

app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`))