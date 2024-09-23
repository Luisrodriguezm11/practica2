const db = require('../config/db.config.js');
const Student = db.Student;

exports.create = (req, res) => {
    let student = {};

    try {
        // Building student object from the request's body
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.idNumber = req.body.idNumber;

        // Save to database
        Student.create(student).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a student with id = " + result.id,
                student: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}
