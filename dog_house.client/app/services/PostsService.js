import { AppState } from "../AppState.js"
import { Post } from "../models/Posts.js"
import { api } from "./AxiosService.js"

class PostsService{
  setActive(postId) {
    throw new Error("Method not implemented.")
  }
  setActive(postId) {
   const post = AppState.posts.find(p => p.id = postId)
   AppState.Activepost = post; 
  }
  async getPosts() {
    const res = await  api.get('api/posts')
    AppState.posts = res.data.map(p => new Post(p))
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