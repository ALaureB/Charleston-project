var express = require('express');
var router = express.Router();
const Steps = require('../controllers/Steps');

/* GET home page. */
router.get('/', Steps.findAll);
router.get('/:id', Steps.find);
router.post('/create', Steps.create);
router.post('/update/:id', Steps.update);
router.post('/delete/:id', Steps.delete);

module.exports = router;