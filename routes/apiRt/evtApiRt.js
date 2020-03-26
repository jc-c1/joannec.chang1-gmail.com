var express = require('express');
var router = express.Router();

const evtApiCtrl = require('../../controllers/api/evtApiCtrl');
const userApiCtrl = require('../../controllers/api/userApiCtrl');

//Events CRUD
router.post('/', evtApiCtrl.createEvt);
router.get('/', evtApiCtrl.readEvts);
router.get('/:id', evtApiCtrl.readEvt);
router.put('/:id', evtApiCtrl.updateEvt);
router.delete('/:id', evtApiCtrl.deleteEvt);


//User CRUD
router.post('/user', userApiCtrl.createUser);
router.put('/user/:id', userApiCtrl.updateUser);
router.delete('/user/:id', userApiCtrl.deleteUser);


//User/Event updates
router.put('/:id', evtApiCtrl.updateRVSP);
router.put('/user/:id', userApiCtrl.addGuest);
router.put('/user/:id', userApiCtrl.removeGuest);

module.exports = router;
