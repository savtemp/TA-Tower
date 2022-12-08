import mongoose, { Schema } from "mongoose";


const schema = mongoose.Schema

export const CommentSchema = new Schema(
  {
    creatorId: {type: Schema.Types.ObjectId, ref:'Account', required: true},
    eventId: {type: Schema.Types.ObjectId, ref:'Event', required: true},
    body: {type: String, required: true},
    isAttending: {type: Boolean, default: false}
  },
  {timestamps: true, toJSON: {virtuals: true}}
)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

CommentSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  ref: 'Event',
  justOne: true
})


// NOTE 
// What is the function of justOne? 
// When would we want to have 'justOne: false'? 