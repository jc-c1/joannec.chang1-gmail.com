const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId,
      ref: 'User'},
    rvsp: { type: Boolean},
  },
  {
    timestamps: true
  }
);

const hostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId,
      ref: 'User'},
    rvsp: { type: Boolean},
  },
  {
    timestamps: true
  }
);

const evtSchema = new Schema(
  {
    name: { type: String, required: true },
    startTime: {type: String,},
    endTime: {type: String,},
    location: { type: String,},
    host: [hostSchema],
    guest: [guestSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Evt', evtSchema);
