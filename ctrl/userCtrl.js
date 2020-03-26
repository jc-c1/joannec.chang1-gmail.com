//User CRUD
router.get('/user/:id', userCtrl.showUser);

const Evt = require('../mod/userMod');

module.exports = {
  showEvts,
  showEvt
};


  function showUser (req, res, next){
    res.render('User', {  });
  }