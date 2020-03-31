
require('../../mod/userMod');
const Evt = require('../../mod/evtMod')


module.exports = {
  createEvt,
  readEvts,
  readEvt,
  updateEvt,
  deleteEvt, 
  createGuest,
  deleteGuest,
  createHost,
  deleteHost,
  updateGuestRVSP,
  updateHostRVSP
  
};

function createEvt(req, res) {
  Evt.create(req.body)
    .then(evtCreated => {
      res.json(evtCreated);
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Invalid Inputs' });
      }
      res.status(500).json({ error: 'Could not create event' });
    });
}

function readEvts(req, res) {
  Evt.find({name: })
    .then(evtsFound => {
      
      res.status(200).json(evtsFound);
    })
    .catch(err => {
      
      res.status(500).json({ error: true });
    });
}
//req.params.id=userid

function readEvt(req, res) {
  Evt.findById(req.params.id)
  .then((evtFound) => {
    res.status(200).json(evtFound);
  })
  .catch(err => {
    res.status(500).json({ error: true });
  });
}
//req.params.id=evtid

function updateEvt(req, res) {
  Evt.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((evtUpdated) =>{
    res.status(200).json(evtUpdated);
  })
  .catch(err => {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Invalid Inputs' });
    }
    res.status(500).json({ error: 'Could not create event' });
  });
}

function deleteEvt(req, res) {
  Evt.findByIdAndDelete(req.params.id)
  .then((evtDeleted) =>{
    res.status(200).json(evtDeleted);
  })
  .catch(err => {
    res.status(500).json({ error: true });
  });
}



function createGuest(req, res) {
  Evt.findById(req.params.id,
  (err, evtFound) =>{
    evtFound.guest.push({"user": req.body.id, "rvsp": false})
    
      res.json(evtFound)
      console.log("Added Guest")
      evtFound.save()
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Invalid Inputs' });
      }
      res.status(500).json({ error: 'Could not create Host' });
    });      

    
  }

  function deleteGuest(req, res) {
    Evt.findById(req.params.id, (err, evtFound) =>{
      evtFound.guest.findByIdAndDelete(req.body.id)
      .populate('user')
      .exec((err, guestFound)=> {
          if (err) {console.log("index error: " + err)}
          res.status(200).json(guestFound)
      
          console.log("Removed Guest")
      })
      .catch(err => {
        res.status(500).json({ error: true });
      });
    });
  }

  
  function createHost(req, res) {
    Evt.findById(req.params.id,
    (err, evtFound) =>{
      evtFound.host.push({"user": req.body.id, "rvsp": false})
      
        res.json(evtFound)
        console.log("Added Host")
        evtFound.save()
      })
      .catch(err => {
        if (err.name === 'ValidationError') {
          return res.status(400).json({ error: 'Invalid Inputs' });
        }
        res.status(500).json({ error: 'Could not create Host' });
      });      

      
    }
  
  function deleteHost(req, res) {
      Evt.findById(req.params.id, (err,evtFound) => {
        evtFound.host.findByIdAndDelete(req.body.id)
        .populate('user')
        .exec((err, hostFound)=> {
            if (err) {console.log("index error: " + err)}
            res.status(200).json(hostFound)
        
            console.log("Removed Host")
        })
        .catch(err => {
          res.status(500).json({ error: true });
        })
      
      })}



function updateGuestRVSP(req, res) {
  Evt.findById(req.params.id, (err,evtFound) =>{
    evtFound.guest.findByIdAndUpdate({_id: req.body.id}, {"rvsp": req.body.rvsp}, {new:true})
    .populate('user')
    .exec((err,rvspFound) => {
      if(err) {consol.log("index error:" + err)}
      res.json(rvspFound)
      
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Invalid Inputs' });
      }
      res.status(500).json({ error: 'Could not update Guest RVSP' });
    });
  })}

  function updateHostRVSP(req, res) {
    Evt.findById(req.params.id, (err,evtFound) =>{
      evtFound.host.findByIdAndUpdate({_id: req.body.id}, {"rvsp": req.body.rvsp}, {new:true})
      .populate('user')
      .exec((err,rvspFound) => {
        if(err) {consol.log("index error:" + err)}
        res.json(rvspFound)
        
      })
      .catch(err => {
        if (err.name === 'ValidationError') {
          return res.status(400).json({ error: 'Invalid Inputs' });
        }
        res.status(500).json({ error: 'Could not update Host RVSP' });
      });
    })}
  

