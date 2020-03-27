const User = require('./mod/userMod');
const Evt = require('./mod/evtMod');

const evts_list = [
  {
    name: "Christmas Dinner",
    startTime: "2020, 11, 25, 17, 30",
    endTime: "2020, 11, 25, 23, 30",
    location: "North Pole",
    
  },
  {
    name: "NYE Count Down Party",
    startTime: "2020, 11, 31, 23, 30",
    endTime: "2021, 0, 1, 2, 30",
    location: "Lego Land",
  }
];

const user_list = [
  {
    firstName: "Bob",
    lastName: "Da Builder",
    username: "BDB",
    password: "xxxxx",
    DOB: "1990, 7, 20",
    Gender: "Male",
  },
  {
    firstName: "Monica",
    lastName: "Geller",
    username: "ABC",
    password: "xxxxxxxx",
    DOB: "1980, 10, 10",
    Gender: "Female",
  },
  {
    firstName: "Chandler",
    lastName: "Bing",
    username: "Muriel",
    password: "xxxxxxxxxxx",
    DOB: "1978, 2, 4",
    Gender: "Male",
  },
  
];



User.deleteMany({}, (err, users)=> {
  console.log('removed all users');
  User.create(user_list, (err, users)=>{
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all users');
    console.log(`created ${users.length} users`);


    Evt.deleteMany({}, (err, evts)=>{
      console.log('removed all evts');
      evts_list.forEach((evtData)=> {
        const evt = new Evt({
          name: evtData.name,
          startTime: evtData.startTime,
          endTime: evtData.endTime,
          location: evtData.location,
          
          
        });

        
       
        User.findOne({name: evtData.guest}, (err, foundUser)=> {
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

        
      });
    });
  });
});