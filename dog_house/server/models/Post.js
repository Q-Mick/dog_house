import mongoose from 'mongoose'
const Schema = mongoose.Schema

  export const PostSchema = new Schema(
    {
      name: { type: String, required: true},
      breed: { type: String, required: true},
      age: {type: Number, required: true},
      size: {type: String, required: true, Enum: ['small', 'medium','large'] },
      imageURL: {type: String, required: true },
      description: { type: String, required: true},
      creatorId: {type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  { timestamps: true, toJSON: {virtuals: true}}
  )
  PostSchema.virtual('creator',{
    localField: 'creatorId',
    foreignField: '_id',
    
    justOne: true,
    ref: 'Account'
  })

  PostSchema.virtual('likeCount', {
    localField: '_id',
    foreignField: "postId",
    ref : 'Like',
    count: true
  })
