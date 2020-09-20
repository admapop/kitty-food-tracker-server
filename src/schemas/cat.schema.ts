import mongoose from 'mongoose';
import shortid from 'shortid';
import feedingSchema from './feeding.schema';

const Schema = mongoose.Schema;

const catSchema = new Schema({
  _id: {
    type: String,
    index: true,
    default: shortid.generate,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Date,
    required: true,
  },
  feeding: [feedingSchema],
});

export interface Cat extends mongoose.Document {
  name: string;
  age: Date;
}

export default mongoose.model<Cat>('Cat', catSchema);
