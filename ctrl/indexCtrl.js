const Evt = require('../mod/evtMod');

module.exports = {
  showEvts,
  showEvt
};

function showEvts (req, res, next){
    res.render('index', {  });
  }

  function showEvt (req, res, next){
    res.render('index', {  });
  }


