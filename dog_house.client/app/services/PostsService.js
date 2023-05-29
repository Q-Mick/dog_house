import { AppState } from "../AppState.js"
import { Post } from "../models/Posts.js"
import { setHTML } from "../utils/Writer.js";
import { api } from "./AxiosService.js"

class PostsService{
 
  setActive(postId) {
    
   const post = AppState.posts.find(p => p.id == postId)
   AppState.activePost = post; 
   console.log("this is the active in the appstate ",AppState.activePost);
   
  }
  async getPosts() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.map(p => new Post(p))
    console.log(res.data);
    console.log('new post',AppState.posts)
    
  }
  async createPost(formData){
    const res = await api.post('api/posts', formData)
    AppState.posts.unshift(new Post(res.data))
    AppState.emit('posts')
    console.log(res.data);

  }

}
export const postsService = new PostsService()