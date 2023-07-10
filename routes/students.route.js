const { Router } = require('express');

const { studentsController } = require('../controllers/students.controller')


const router = Router()


router.get('/Students',studentsController.getStudents)
router.patch('/Students/:id', studentsController.patchStudents)

router.delete('/Students/:id', studentsController.studentDeleted);
router.post('/Students',studentsController.createStudents);



module.exports = router;