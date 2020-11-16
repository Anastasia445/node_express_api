import express from 'express';
import bodyParser from 'body-parser';
import departmentsRoutes from './routes/departments.js'
import managersRoutes from './routes/managers.js'
import employeesRoutes from './routes/employees.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/api/getdepartments', departmentsRoutes);
app.use('/api/getemployees', employeesRoutes);
app.use('/api/getmanagers', managersRoutes);

//app.get('/', (req, res) =>res.send('sdfsd'));


app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`))