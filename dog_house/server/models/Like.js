import mongoose from "mongoose";

const Schema = mongoose.Schema

export const LikeSchema = new Schema({
postId: { type: Schema.Types.ObjectId, required: true, ref:'Post'},
commentId: { type: Schema.Types.ObjectId, required: true, ref:'Comment'},
likeId: { type: Schema.Types.ObjectId, required: true},

})

LikeSchema.virtual('post', {
  localField: 'postId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

LikeSchema.index({ postId: 1, commentId: 1}, {unique: true})