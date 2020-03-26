// TODO: Unfinished

var express = require('express');
var router = express.Router();

const evtApiCtrl = require('../../controllers/api/evtApiCtrl');
const userApiCtrl = require('../../controllers/api/userApiCtrl');

//Events CRUD
router.post('/evt/:id', evtApiCtrl.createEvt);
router.get('/evt/:id', evtApiCtrl.readEvts);
router.get('/evt/:id', evtApiCtrl.readEvt);
// TODO : Can prolly collapse all into just updateEVt and nest each fn into it.
router.put('/evt/:id', evtApiCtrl.updateEvt, evtApiCtrl.updateRVSP, userApiCtrl.addGuest, userApiCtrl.removeGuest);
router.delete('/evt/:id', evtApiCtrl.deleteEvt);


//User CRUD
router.post('/user', userApiCtrl.createUser);
router.put('/user/:id', userApiCtrl.updateUser);
router.delete('/user/:id', userApiCtrl.deleteUser);




module.exports = router;
