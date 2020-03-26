const Evt = require('../../mod/evtMod');

module.exports = {
  createEvt,
  readEvts,
  readEvt,
  updateEvt,
  deleteEvt, 
  updateRVSP,
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
  // using callbacks
  // Puppy.find({}, function(err, puppies) {
  //   if (err) {
  //     return res.status(500).json({ error: 'Something went wrong' });
  //   }
  //   res.json(puppies);
  // });

  // using promises
  Evt.find({})
    .then(puppies => {
      res.json(evt);
    })
    .catch(err => {
      res.status(500).json({ error: true });
    });

  // quick way of testing if the route / controller is wired up properly
  // res.send('OK');
}

function readEvt(req, res) {
  Evt.findById(req.params.id).then(function(evt) {
    res.status(200).json(evt);
  });
}


function updateEvt(req, res) {
  Evt.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(evt) {
    res.status(200).json(evt);
  });

  // another option
  // Puppy.findById(req.params.id)
  //   .then(puppy => {
  //     puppy.set(req.body);
  //     return puppy.save();
  //   })
  //   .then(puppy => {
  //     res.json(puppy);
  //   });
}

function deleteEvt(req, res) {
  Puppy.findByIdAndDelete(req.params.id).then(function(evt) {
    res.status(200).json(evt);
  });
}


function updateRVSP(req, res) {
  Evt.findById(req.params.id, function(err, evt) {
    evt.rvsp.push(req.body);
    evt.save(function(err) {
      res.redirect(`/event/${evt._id}`);
    });
  });
}