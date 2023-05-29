import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js"
import { Forbidden } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";
class PostsService{
  async deletePost(postId, userId) {
    const post = await this.getPostByID(postId)
    logger.log('postId');
    if (post.creatorId != userId) {
      throw new Forbidden("Unauthorized to edit that post")
  }

  await post.remove()
  return
  }
  async getPostByID(postId) {
  const post = await dbContext.Posts.findById(postId).populate('creator likeCount')
 if (!post){
    throw new BadRequest('not your dog')
  }
  return post
  }

  async createPosts(postData) {
    const newPost = await dbContext.Posts.create(postData)
    await newPost.populate('creator likeCount')
    return newPost
  }

  async getPosts(query) {
    const posts = await dbContext.Posts.find(query)
    .populate('creator likeCount')
    .sort('likecount')
    

    return posts
  }
}

export const postsService = new PostsService()