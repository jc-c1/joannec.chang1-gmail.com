//TODO : Need to work out facebook/google user API

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, },
    password: { type: String,  },
    DOB: { type: Date, },
    Gender: { type: String, },
    fAcc: { type: String},
    gAcc: { type: String,}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
