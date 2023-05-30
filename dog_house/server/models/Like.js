import mongoose from "mongoose";

const Schema = mongoose.Schema

export const LikeSchema = new Schema({
postId: { type: Schema.Types.ObjectId, required: true, ref:'Post'},
accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account'}
},
{ timestamps: true, toJSON: { virtuals: true } }
)

LikeSchema.virtual('liker', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
// prevent more than one like
LikeSchema.index({ postId: 1, accountId: 1}, {unique: true})