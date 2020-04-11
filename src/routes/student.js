//Creating a Router
const router = require('express').Router();
const studentController = require('../controllers/studentController');

//Routes
router.get('/', studentController.list);
router.post('/save/', studentController.save);
router.get('/update/:id', studentController.edit);
router.post('/update/:id', studentController.update);
router.get('/delete/:id', studentController.delete);


//Exporting the router for other files to access
module.exports = router;