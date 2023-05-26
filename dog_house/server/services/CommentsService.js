import { dbContext } from "../db/DbContext.js";


class CommentsService {
  async getCommentsPostById(postId) {
   const comments = await dbContext.Comments.find({postId}).populate('commentor')
   return comments
   
  }
  async createComment(body) {
    const comment = await dbContext.Comments.create(body)
    await comment.populate('commentor', 'name picture')
    return comment
  }
}

export const commentsService = new CommentsService()