import { dbContext } from "../db/DbContext.js";

class LikeService {
  async getLikesByPostId(postId) {
    const likes = await dbContext.Like.findById(postId)
  }
  async likePost(body) {
   const liked = await dbContext.Like.create(body)
   await liked.populate('Liker')
   return liked

  }


}


export const likeService = new LikeService()