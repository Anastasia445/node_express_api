import express from 'express';

const router = express.Router();

const managers = [
    {idManager: 1, idDepartment: 1, fname: 'Малёк', lname: 'Виктор', patronymic:'Сергеевич'},
    {idManager: 2, idDepartment: 2, fname: 'Колос', lname: 'Мария', patronymic:'Петровна'},
    {idManager: 3, idDepartment: 3, fname: 'Мурас', lname: 'Анатолий', patronymic:'Викторович'}
  ];

router.get('/', (req, res) => {
       res.send(managers);
   });

/*app.get('/:id', function (req, res) {
    let id = req.params.id;
    res.send('Получил GET запрос с параметром: ' + id);
  });*/

export default router;