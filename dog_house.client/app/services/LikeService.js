import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { api } from "./AxiosService.js";


class LikeService{
  async becomeLiker(postId) {
    const res = await api.post('api/liker', { postId: postId })
    console.log('[BECOMING LIKER]', res.data);

    // NOTE this updates the UI to now match the state of our data in the database
    const post = AppState.posts.find(p => p.id == postId)
    post.likeCount++
    AppState.emit('posts')
}
async getLikersActivePost() {
  const post = AppState.activePost
  // @ts-ignore
  const res = await api.get(`api/post/${post.id}/likers`)
  console.log('[GETTING LIKERS]', res.data);
  // NOTE here we are using our account model... because the spotters that are populated from the server come from the account collection in the data base
  AppState.likers = res.data.map(l => new Account(l.likers))
  console.log(AppState.likers);

}

}

export const likeService = new LikeService()