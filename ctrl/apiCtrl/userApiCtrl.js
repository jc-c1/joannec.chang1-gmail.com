const User = require('../../mod/userMod');


module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  
};


function createUser(req, res) {
    User.create(req.body)
      .then(userCreated => {
        res.json(userCreated);
      })
      .catch(err => {
        if (err.name === 'ValidationError') {
          return res.status(400).json({ error: 'Invalid Inputs' });
        }
        res.status(500).json({ error: 'Could not create user' });
      });
  }



  function readUser(req, res) {
    User.findById(req.params.id).then(function(userFound) {
      res.status(200).json(userFound);
    })
    .catch(err => {
      res.status(500).json({ error: true });
    });
  }




  function updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(function(user) {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: true });
    })
  
  }



  
  function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id).then(function(user) {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: true });
    })
  }



  


  