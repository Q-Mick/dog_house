import mongoose from "mongoose";

const Schema = mongoose.Schema

export const LikeSchema = new Schema({
postId: { type: Schema.Types.ObjectId, required: true, ref:'Post'},
accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account'}


})

LikeSchema.virtual('Liker', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

LikeSchema.index({ postId: 1, commentId: 1}, {unique: true})