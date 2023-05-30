import { text } from "express";
import { Schema } from "mongoose";
import { PostSchema } from "./Post.js";



export const CommentSchema = new Schema (
  {
    postId: { type: Schema.Types.ObjectId, required: true, ref: 'Post'},
    commentCreatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    commentBody: { type: String, required: true},
      },
  { timestamps: true, toJson: { virtuals: true} }
  )

PostSchema.virtual('post', {
  localField: 'postId',
  foreignField: '_id',
  justOne: true,
  ref: 'Post'
})

CommentSchema.virtual('commentor', {
  localField: 'commentCreatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
 },
 )

 CommentSchema.index ({  creatorId: 1}, {unique: true })