import { commentsService } from "../services/CommentsService.js";
import { likeService } from "../services/LikeService.js";
import { postsService } from "../services/PostsService.js"
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PostsController extends BaseController {
constructor() {
  super('api/posts')
  this.router
  .get('', this.getPosts)
  // FIXME --v this is not right 
  .get('/:postId', this.getPostById)
  .get('/:postId/comments' , this.getCommentsByPostId)
  .get('/:postId/likes', this.getLikesByPostId)
  // add in the .use to get userInfo attached to post (plus do extra obv)
  .use(Auth0Provider.getAuthorizedUserInfo)
  .post('', this.createPost)
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
    return res.send(posts)
  } catch (error) {
    next(error)
  }
}

async getPostById(req, res, next){
  try {
    const creatorId = req.params.creatorId
    const post = await postsService.getPostByID(creatorId)
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