const controller = {};

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

module.exports = controller;