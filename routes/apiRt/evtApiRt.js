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

router.post("/api/evt/:id/host", evtApiCtrl.createHost);
router.delete("/api/evt/:id/host", evtApiCtrl.deleteHost);
router.put("/api/evt/:id/host", evtApiCtrl.updateHostRVSP);

router.post("/api/evt/:id/guest", evtApiCtrl.createGuest);
router.delete("/api/evt/:id/guest", evtApiCtrl.deleteGuest);
router.put("/api/evt/:id/guest", evtApiCtrl.updateGuestRVSP);

//User CRUD
router.post('/api/user', userApiCtrl.createUser);
router.get('/api/user/:id', userApiCtrl.readUser)
router.put('/api/user/:id', userApiCtrl.updateUser);
router.delete('/api/user/:id', userApiCtrl.deleteUser);






module.exports = router;
