var express = require('express');
var router = express.Router();

const evtApiCtrl = require('../../ctrl/apiCtrl/evtApiCtrl');
const userApiCtrl = require('../../ctrl/apiCtrl/userApiCtrl');

//Admin READ
router.get('/api/admin/evt', evtApiCtrl.adminEvts);
router.get('/api/admin/user', userApiCtrl.adminUsers)


//Events CRUD
router.post('/api/evt/:id', evtApiCtrl.createEvt);
router.get('/api/evt/:id/all', evtApiCtrl.readEvts);
router.get('/api/evt/:id', evtApiCtrl.readEvt);
router.put('/api/evt/:id', evtApiCtrl.updateEvt);
router.delete('/api/evt/:id', evtApiCtrl.deleteEvt);


//HOST CRUD
router.post("/api/evt/:id/host", evtApiCtrl.createHost);
router.delete("/api/evt/:id/host", evtApiCtrl.deleteHost);
router.put("/api/evt/:id/host", evtApiCtrl.updateHostRVSP);


//GUEST CRUD
router.post("/api/evt/:id/guest", evtApiCtrl.createGuest);
router.delete("/api/evt/:id/guest", evtApiCtrl.deleteGuest);
router.put("/api/evt/:id/guest", evtApiCtrl.updateGuestRVSP);


//User CRUD
router.post('/api/user', userApiCtrl.createUser);
router.get('/api/user/:id', userApiCtrl.readUser)
router.put('/api/user/:id', userApiCtrl.updateUser);
router.delete('/api/user/:id', userApiCtrl.deleteUser);


module.exports = router;
