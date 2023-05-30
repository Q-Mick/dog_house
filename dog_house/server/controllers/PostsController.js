import { commentsService } from "../services/CommentsService.js";
import { likeService } from "../services/LikeService.js";
import { postsService } from "../services/PostsService.js"
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { logger } from "../utils/Logger.js";
export class PostsController extends BaseController {
constructor() {
  super('api/posts')
  this.router
  .get('', this.getPosts)
  // FIXME --v this is not right 
  .get('/:postId', this.getPostById)
  .get('/:postId/comments' , this.getCommentsByPostId)
  .get('/:postId/liker', this.getLikesByPostId)
  // add in the .use to get userInfo attached to post (plus do extra obv)
  .use(Auth0Provider.getAuthorizedUserInfo)
  .delete('/:postId', this.deletePost)
  .post('', this.createPost)
}

async deletePost(req, res, next){
  try {
    const postId = req.params.postId
    const userId = req.userInfo.Id
    logger.log(postId, userId)
    const deletedPost =  await postsService.deletePost(postId, userId)
    res.send(`[DELETED POST]`,deletedPost)
  } catch (error) {
    next(error)
  }
}
 async getCommentsByPostId(req, res, next) {
try {
  const postId = req.params.postId
  const comments = await commentsService.getCommentsPostById(postId)
  return res.send(comments)
  
} catch (error) {
  next(error)
}
  }

async createPost(req,res,next) {
  try {
    req.body.creatorId = req.userInfo.id
    const postData = req.body
    const newPost = await postsService.createPosts(postData)
    return res.send(newPost)
  } catch (error) {
    next(error)
    
  }
}

async getPosts( req, res, next) {
  try {
    const query = req.query
    const posts = await postsService.getPosts(query)
    
    console.log(res.data);
    return res.send(posts)
  } catch (error) {
    next(error)
  }
}

async getPostById(req, res, next){
  try {
    const postId = req.params.postId
    const post = await postsService.getPostByID(postId)
    return res.send(post)
  } catch (error) {
    next(error)
  }
}

async getLikesByPostId(req, res, next) {
    try {
      const postId = req.params.postId
      const likes = await likeService.getLikesByPostId(postId)
      res.send(likes)
    } catch (error) {
      next(error)
    }
  }

}