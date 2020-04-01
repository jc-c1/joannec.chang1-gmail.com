require("./config/database");
const User = require("./mod/userMod");
const Evt = require("./mod/evtMod");

const evts_list = [
  {
    name: "Christmas Dinner",
    startTime: "2020, 11, 25, 17, 30",
    endTime: "2020, 11, 25, 23, 30",
    location: "North Pole"
  },
  {
    name: "NYE Count Down Party",
    startTime: "2020, 11, 31, 23, 30",
    endTime: "2021, 0, 1, 2, 30",
    location: "Lego Land"
  }
];

const user_list = [
  {
    firstName: "Bob",
    lastName: "Da Builder",
    username: "BDB",
    password: "xxxxx",
    DOB: "1990, 7, 20",
    Gender: "Male"
  },
  {
    firstName: "Monica",
    lastName: "Geller",
    username: "ABC",
    password: "xxxxxxxx",
    DOB: "1980, 10, 10",
    Gender: "Female"
  },
  {
    firstName: "Chandler",
    lastName: "Bing",
    username: "Muriel",
    password: "xxxxxxxxxxx",
    DOB: "1978, 2, 4",
    Gender: "Male"
  }
];

const insertSeed = () => {
  let a = evts_list.map(x => {
    return new Evt(x).save().catch(err => console.log(err));
  });
  let b = user_list.map(x => {
    return new User(x).save().catch(err => console.log(err));
  });



  Promise.all([...a, ...b])
    .then(() => {
      let userId;
      User.findOne()
        .then(UserFound => {
          userId = UserFound._id;
          console.log(userId);
        })
        .then(() =>{
          Evt.find().then(evtsFound => {
            evtsFound.forEach(evtFound => {
              evtFound.host.push({user: userId, rvsp: 1});
              evtFound.save();
            });
          })
        });
    })
    .catch(err => {
      console.log(err);
    });
};
let c = User.deleteMany()
let d = Evt.deleteMany()


Promise.all([c, d])
  .then(() => console.log("deleted Evt"))
  .then(() => console.log("deleted User"))
  .then(insertSeed);
