import { dbContext } from "../db/DbContext.js";

class PostsService{

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