import express from 'express';

const router = express.Router();

const employees = [
    {idEmployee: 1, idManagers: 1, fname: 'Крич', lname: 'Виктория', patronymic:'Егоровна'},
    {idEmployee: 2, idManagers: 1, fname: 'Старик', lname: 'Мария', patronymic:'Петровна'},
    {idEmployee: 3, idManagers: 1, fname: 'Польчик', lname: 'Петр', patronymic:'Викторович'}
  ];

router.get('/', (req, res) => {
       res.send(employees);
   });

/*app.get('/:id', function (req, res) {
    let id = req.params.id;
    res.send('Получил GET запрос с параметром: ' + id);
  });*/

export default router;