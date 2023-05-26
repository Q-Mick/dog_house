import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js"
import { commentsService } from "../services/CommentsService.js";



export class CommentController extends BaseController{
constructor(){
  super('api/comments')
  this.router
  .use(Auth0Provider.getAuthorizedUserInfo)
  .post('', this.createComment)
}

  async createComment(req, res, next) {
    try {
      req.body.commentCreatorId = req.userInfo.id
      const comment = await commentsService.createComment(req.body)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

}