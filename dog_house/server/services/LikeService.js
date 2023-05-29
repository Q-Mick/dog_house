import { dbContext } from "../db/DbContext.js";

class LikeService {
  async getLikesByPostId(postId) {
    const likes = await dbContext.Likes.find({postId})
    .populate('liker')
    return likes

  }
  async likePost(body) {
   const liked = await dbContext.Likes.create(body)
   await liked.populate('liker')
   return liked

  }


}


export const likeService = new LikeService()