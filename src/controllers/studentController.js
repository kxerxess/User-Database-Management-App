const controller = {};


//Controller to display all database rows to the table
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM student', (err, students) => {
            if (err) {
                res.json(err);
            }
            res.render('students', {
                data: students
            });
        });
    });
};

//Controller to save new row in the database
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
        connection.query('INSERT INTO student set ?', data, (err, students) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        })
    })
}

//Controller to edit a row in the database
controller.edit = (req, res) => {
    var id = req.params.id.substring(1);
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM student WHERE id = ?', id, (err, rows) => {
            res.render('student-edit', {
                data: rows[0]
            })
        })
    })
}

//Controller to update the edited row in the database
controller.update = (req, res) => {
    const id = req.params.id;
    updatedStudent = req.body;
    req.getConnection((err, connection) => {
        connection.query('UPDATE student set ? where id = ?', [updatedStudent, id], (err, rows) => {
            res.redirect('/');
        })
    })
}

//Controller to delete a row from the database
controller.delete = (req, res) => {
    const id = req.params.id.substring(1);
    console.log(id);

    req.getConnection((err, connection) => {
        connection.query('DELETE FROM student WHERE id = ?', id, (err, rows) => {
            res.redirect('/');
        })
    })
}

module.exports = controller;