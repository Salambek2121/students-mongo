const Student = require('../models/Student.model');

module.exports.studentsController = {
    getStudents: (req, res) => {
        Student.find().then((data) => {
            res.json(data)
        })
    },
    studentDeleted: (req, res) => {
        Student.findByIdAndRemove(req.params.id).then(() => {
            res.json('deleted');
        })
    },

    createStudents: (req, res) => {
        Student.create(

            {
                name: req.body.name,
                age: req.body.age,
                phone: req.body.phone
            }).then((data) => {
                res.json(data);
            }
            )
    },

    patchStudents: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, {name: req.body.name} ).then((data) => {
            res.json(data)
        }
        )
    }

}