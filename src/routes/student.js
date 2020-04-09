//Creating a Router
const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.list);

//Exporting the router for other files to access
module.exports = router;