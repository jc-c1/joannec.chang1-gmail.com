//TODO: unfinished

const db = require('./models');

const evts_list = [
  {
    name: "Christmas Dinner",
    startTime: "",
    endTime: "",
    location: "North Pole",
    
  },
  {
    name: "NYE Count Down",
    startTime: "",
    endTime: "",
    location: "Big Apple",
    
  }
];

const user_list = [
  {
    name: "Harper Lee",
    gAcc: ""
  },
  {
    name: "F Scott Fitzgerald",
    gAcc: ""
  },
  {
    name: "Victor Hugo",
    gAcc: ""
  },
  {
    name: "Jules Verne",
    gAcc: ""
  },
  {
    name: "Sheryl Sandberg",
    gAcc: ""
  },
];




db.User.deleteMany({}, (err, users)=> {
  console.log('removed all users');
  db.User.create(user_list, (err, users)=>{
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all users');
    console.log(`created ${users.length} users`);


    db.Evt.deleteMany({}, (err, evts)=>{
      console.log('removed all evts');
      evts_list.forEach((evtData)=> {
        const evt = new db.Evt({
          name: evtData.name,
          startTime: evtData.startTime,
          endTime: evtData.endTime,
          location: evtData.location,
          
          
        });
        
        //TODO: ADD IN HOST/GUEST/RVSP
        /*
        db.User.findOne({name: evtData.guest}, (err, foundUser)=> {
          console.log(`found User ${foundUser.name} for event ${evt.name}`);
          if (err) {
            console.log(err);
            return;
          }
          evt.user = foundUser;
          evt.save((err, savedEvt)=>{
            if (err) {
              console.log(err);
            }
            console.log(`saved ${savedEvt.name} by ${foundUser.name}`);
            
          });
        });

        */
      });
    });
  });
});