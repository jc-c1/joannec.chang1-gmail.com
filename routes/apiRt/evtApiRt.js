var express = require('express');
var router = express.Router();

const evtApiCtrl = require('../../ctrl/apiCtrl/evtApiCtrl');
const userApiCtrl = require('../../ctrl/apiCtrl/userApiCtrl');

//Events CRUD
router.post('/evt/:id', evtApiCtrl.createEvt);
router.get('/evt/:id/all', evtApiCtrl.readEvts);
router.get('/evt/:id', evtApiCtrl.readEvt);
router.put('/evt/:id', evtApiCtrl.updateEvt);
router.delete('/evt/:id', evtApiCtrl.deleteEvt);

router.post("/evt/:id/host", evtApiCtrl.createHost);
router.delete("/evt/:id/host", evtApiCtrl.deleteHost);
router.put("/evt/:id/host", evtApiCtrl.updateHostRVSP);

router.post("/evt/:id/guest", evtApiCtrl.createGuest);
router.delete("/evt/:id/guest", evtApiCtrl.deleteGuest);
router.put("/evt/:id/guest", evtApiCtrl.updateGuestRVSP);

//User CRUD
router.post('/user', userApiCtrl.createUser);
router.get('/user/:id', userApiCtrl.readUser)
router.put('/user/:id', userApiCtrl.updateUser);
router.delete('/user/:id', userApiCtrl.deleteUser);






module.exports = router;
