import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js"
class PostsService{
  async getPostByID(creatorId) {
  const post = await dbContext.Posts.findById(creatorId)
 if (!post){
    throw new BadRequest('not your dog')
  }
  return post
  }

  async createPosts(postData) {
    const newPost = await dbContext.Posts.create(postData)
    return newPost
  }

  async getPosts(query) {
    const posts = await dbContext.Posts.find(query)
    return posts
  }
}

export const postsService = new PostsService()