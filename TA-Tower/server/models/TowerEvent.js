import mongoose, { Schema } from "mongoose";


const schema = mongoose.Schema


// TODO After postman tests go back in and add minlength and maxlength 
export const TowerEventSchema = new Schema(
{
  name: {type: String, required: true},
  description: {type: String, required: true},
  coverImg: {type: String, required: true},
  location: {type: String, required: true},
  capacity: {type: Number, required: true},
  startDate: {type: Date, required: true},
  isCanceled: {type: Boolean, default: false},
  type: {type: String, enum: ['concert', 'convention', 'sport', 'digital'], required: true, default: 'misc', lowercase: true},
  creatorId: {type: Schema.Types.ObjectId, ref:'Account', required: true}
},
{timestamps: true, toJSON: {virtuals: true}}
)

TowerEventSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

// NOTE 
// You can create a DB-Utils folder that can just export shortened code for you so you don't have to rewrite the same things (or just create a snippet)
// SCHEMA_OPTIONS = {timestamps: true, TOJSON: {virtuals: true}}
// ObjectId = Schema.Types.ObjectId 