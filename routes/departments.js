import express from 'express';

const router = express.Router();

const departments = [
    {idDepartment: 1, nameDepartment: "Финансовый отдел"},
    {idDepartment: 2, nameDepartment: "Юридический отдел"},
    {idDepartment: 3, nameDepartment: "Корпоративный отдел"}
  ]

router.get('/', (req, res) =>{
    res.send(departments);

});

export default router;