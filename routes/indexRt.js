var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/indexCtrl');
const userCtrl = require('../controllers/userCtrl');

//Events CRUD

router.get('/', indexCtrl.showEvts);
router.get('/:id', indexCtrl.showEvt);



//User CRUD
router.get('/user/:id', userCtrl.showUser);



module.exports = router;
