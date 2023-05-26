import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { likeService } from "../services/LikeService.js";

export class LikeController extends BaseController{
constructor(){
super('api/likes')
this.router
.use(Auth0Provider.getAuthorizedUserInfo)
.post('',this.likePost)

}
  
  async likePost(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const liked = await likeService.likePost(req.body)
      return res.send(liked)
    } catch (error) {
      next(error)
    }
  }
}