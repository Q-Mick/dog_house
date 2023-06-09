import { AppState } from "../AppState.js"
import { Post } from "../models/Posts.js"
import { api } from "../services/AxiosService.js"
import { postsService } from "../services/PostsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawActive(){

  // const active = AppState.activePost
  setHTML('active-puppy',  Post.activeTemplate())
}
function _drawPost(){
  const post = AppState.posts
  
  let template = ""
  post.forEach(p => template += p.postTemplate)
  setHTML('dog-posts', template)

}

// Public
export class PostController {
  constructor() {
    
    console.log('The Post page has loaded')
    this.getPosts()
    this.showCreatePost()
    AppState.on('account', _drawPost)
    AppState.on('posts',_drawPost)
    AppState.on('activePost',_drawActive)
  }

  showCreatePost(){
    console.log('showing create button');
    let createElem = document.getElementById('create-post')
    // @ts-ignore
    createElem.style.display = "block"
  }
  getPostForm(){
    setHTML('modal-guts', Post.postForm())
  }
  async getPosts(){
   try {
    
   await postsService.getPosts()
   } catch (error) {
    Pop.error(error)
    
   }
  }




  async setActive(postId){
    try {
      await postsService.setActive(postId)
      
    } catch (error) {
      Pop.error(error)
    }
  }

  async createPost(){
    if (!AppState.account){
      Pop.toast("Must be logged in")
    return
    }
    try {
      window.event?.preventDefault()
      const form = event?.target
      const formData = getFormData(form)
      await postsService.createPost(formData)
      
    } catch (error) {
      Pop.error(error)
    }
  }
  

}
