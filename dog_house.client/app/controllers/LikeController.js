import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { likeService } from "../services/LikeService.js"
import { setText } from "../utils/Writer.js"
function _drawLikers() {
  debugger
  let likers = AppState.likers
 console.log('updating likes');
  setText('spotters', likers)
}
export class LikeController{
  constructor(){
    console.log("hello from the LikeController")
    AppState.on('likers', _drawLikers)
  }

  async becomeLiker(postId){
    try {
    console.log("adding like", postId)
    await likeService.becomeLiker(postId)
      
    } catch (error) {
      Pop.error(error)
    }
  }
}
