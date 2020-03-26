const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dipSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId,
      ref: 'User'},
    dipStat: { type: Boolean},
  },
  {
    timestamps: true
  }
);

const evtSchema = new Schema(
  {
    name: { type: String, required: true },
    startTime: {type: Date,},
    endTime: {type: Date,},
    location: { type: String,},
    host: { type: Schema.Types.ObjectId,
        ref: 'User'},
    guest: [{ type: Schema.Types.ObjectId,
        ref: 'User'}],
    rvsp: dipSchema
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Evt', evtSchema);
