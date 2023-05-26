import { dbContext } from "../db/DbContext.js";


class CommentsService {
  async createComment(body) {
    const comment = await dbContext.Comments.create(body)
    await comment.populate('commentor', 'name picture')
    return comment
  }
}

export const commentsService = new CommentsService()