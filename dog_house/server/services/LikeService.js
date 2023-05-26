import { dbContext } from "../db/DbContext.js";

class LikeService {
  async getLikesByPostId(postId) {
    const likes = await dbContext.Likes.find({postId}).populate('Liker')
    return likes

  }
  async likePost(body) {
   const liked = await dbContext.Likes.create(body)
   await liked.populate('Liker')
   return liked

  }


}


export const likeService = new LikeService()