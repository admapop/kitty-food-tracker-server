import mongoose from 'mongoose';
import shortid from 'shortid';

const Schema = mongoose.Schema;

const feedingSchema = new Schema({
  _id: {
    type: String,
    index: true,
    default: shortid.generate,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  feedingPouch: {
    type: Boolean,
    required: true,
  },
  pouchRecommended: Number,
  kibblesRecommended: Number,
  pouchRemaining: Number,
  kibblesRemaining: Number,
  feedings: [
    {
      _id: {
        type: String,
        index: true,
        default: shortid.generate,
      },
      pouchFed: { type: Number, required: true },
      kibblesFed: { type: Number, required: true },
    },
  ],
});

export default feedingSchema;
