require("../../mod/userMod");
const Evt = require("../../mod/evtMod");

module.exports = {
  adminEvts,
  createEvt,
  readEvts,
  readEvt,
  updateEvt,
  deleteEvt,
  createHost,
  deleteHost,
  createGuest,
  deleteGuest,
  updateGuestRVSP,
  updateHostRVSP
};

//hostless event


function createEvt(req, res) {
  Evt.create(req.body)
    .then(evtCreated => {
      evtCreated.host.push({ user: req.params.id, rvsp: 1 })
      evtCreated.save()
      res.json(evtCreated);
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        return res.status(400).json({ error: "Invalid Inputs" });
      }
      res.status(500).json({ error: "Could not create event" });
    });
}

function adminEvts(req, res) {
  Evt.find(
    {}
  )
    .then(evtsFound => {
       res.status(200).json(evtsFound);}
    )
    .catch(err => {
      res.status(500).json({ error: true });
    });
}


function readEvts(req, res) {
  Evt.find(
    {
      "host._id": req.params.id
    }
  )
    .then(evtsFound => {
       res.status(200).json(evtsFound);}
    )
    .catch(err => {
      res.status(500).json({ error: true });
    });
}
//req.params.iduserid

function readEvt(req, res) {
  Evt.findById(req.params.id)
    .then(evtFound => {
      res.status(200).json(evtFound);
    })
    .catch(err => {
      res.status(500).json({ error: true });
    });
}
//req.params.id=evtid

function updateEvt(req, res) {
  Evt.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(evtUpdated => {
      res.status(200).json(evtUpdated);
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        return res.status(400).json({ error: "Invalid Inputs" });
      }
      res.status(500).json({ error: "Could not create event" });
    });
}

function deleteEvt(req, res) {
  Evt.findByIdAndDelete(req.params.id)
    .then(evtDeleted => {
      res.status(200).json(evtDeleted);
    })
    .catch(err => {
      res.status(500).json({ error: true });
    });
}




function createGuest(req, res) {
  
  Evt.findById(req.params.id, (err, evtFound) => {

    evtFound.guest.push({ user: req.body.user, rvsp: -1 });

    res.json(evtFound);
    console.log("Added Guest");
    evtFound.save();
  }).catch(err => {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: "Invalid Inputs" });
    }
    res.status(500).json({ error: "Could not create Host" });
  });
}

function deleteGuest(req, res) {
  Evt.findById(req.params.id, (err, evtFound) => {
    evtFound.guest = evtFound.guest.filter(el => el.user != req.body.user);
    evtFound.save();

    res.status(200).json(evtFound);

    console.log("Removed Guest");
  })
      .catch(err => {
        res.status(500).json({ error: true });
      });
 
}

function createHost(req, res) {
  
  Evt.findById(req.params.id, (err, evtFound) => {

    evtFound.host.push({ user: req.body.user, rvsp: 1 });

    res.json(evtFound);
    console.log("Added Host");
    evtFound.save();
  }).catch(err => {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: "Invalid Inputs" });
    }
    res.status(500).json({ error: "Could not create Host" });
  });
}


function deleteHost(req, res) {
  Evt.findById(req.params.id, (err, evtFound) => {
    evtFound.host = evtFound.host.filter(el => el.user != req.body.user);
    evtFound.save();

    res.status(200).json(evtFound);

    console.log("Removed Guest");
  })
      .catch(err => {
        res.status(500).json({ error: true });
      });
 
}
function changeDesc( value, desc ) {
  for (var i in projects) {
    if (projects[i].value == value) {
       projects[i].desc = desc;
       break; //Stop this loop, we found it!
    }
  }
}

function updateGuestRVSP(req, res) {
  Evt.findById(req.params.id, (err, evtFound) => {
    evtFound.guest.forEach((i)=>{if (i.user = req.body.user){i.rvsp*=-1}})
      
        res.json(evtFound);
      })
      .catch(err => {
        if (err.name === "ValidationError") {
          return res.status(400).json({ error: "Invalid Inputs" });
        }
        res.status(500).json({ error: "Could not update Guest RVSP" });
      });
  }

  function updateHostRVSP(req, res) {
    Evt.findById(req.params.id, (err, evtFound) => {
      evtFound.host.forEach((i)=>{if (i.user = req.body.user){i.rvsp*=-1}})
        
          res.json(evtFound);
        })
        .catch(err => {
          if (err.name === "ValidationError") {
            return res.status(400).json({ error: "Invalid Inputs" });
          }
          res.status(500).json({ error: "Could not update Guest RVSP" });
        });
    }
