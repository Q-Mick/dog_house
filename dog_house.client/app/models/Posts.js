import { AppState } from "../AppState.js"

export class Post{
  constructor(data){
    this.name = data.name
    this.breed = data.breed
    this.age = data.age
    this.size = data.size
    this.creatorId = data.creatorId
    this.imageURL = data.imageURL
    this.id = data.id
    this.description = data.description
    
  }
  get postTemplate(){
    return /*html*/`
    <div class="col-4 p-2">
        <div class="m-1 dog-card bg-secondary elevation-5" onclick="app.PostController.setActive('${this.id}')"> 
          <img
            class="dog-image rounded-top"
            src=${this.imageURL}
            alt=""
          />
          <div class="d-flex justify-content-between">
            <p class="p-1 m-0" id="dog-name">${this.name}</p>
            <p class="p-1 m-0">${this.breed}</p>
          </div>
          <div class="d-flex justify-content-between">
            <i class="p-1 mdi mdi-star fs-2" id="favorite"></i>
            <p class="p-1 mt-2 fs-5" id="likes">
              <i class="mdi mdi-thumb-up"></i>5
            </p>
          </div>
        </div>
      </div>

    `
  }

  static activeTemplate(){
    return /*html*/`
    <div class="row p-2 border-4 border border-dark elevation-5 m-3 bg-secondary">
    <div class="col-8 ">
      <img class="border border-info border-3 activeDog img-fluid" src="${AppState.activePost.imageURL}" alt="">
    </div>
    <div class="col">
      <p class="mx-2 my-3"><span class="fw-bold">Name: </span>${AppState.activePost.name}</p>
      <p class="mx-2 my-3"> <span class="fw-bold">Breed:</span> ${AppState.activePost.breed}</p>
      <p class="mx-2 my-3"><span class="fw-bold">Age:</span> ${AppState.activePost.age}</p>
      <p class="mx-2 my-3"><span class="fw-bold">Size:</span> ${AppState.activePost.size}</p>
      <p class="mx-2 my-3"><span class="fw-bold">Description:</span> ${AppState.activePost.description}</p>
    </div>
  
   <div class="row">
   <div class="col-12  border-3 border border-info m-2 rounded " id="comments">
   <p class="mx-2"><em class="fs-3 mdi mdi-account-box">comments:</em></p>
   <div class="">
   <p class="elevation-4 mx-2 bg-light border border-3 border-dark mdi mdi-account-box p-3"> this is a comment</p>
   </div>
   </div>
   <div class="row">
   <div class="col-12 d-flex justify-content-between">
   <button class="mx-2">add Comment<i class="mdi mdi-comment">
   </i></button>
   <button class="mx-2">favorite<i class="mdi mdi-star">
   </i></button>
   </div>
   </div>
   </div>
  </section>
  `
  
  }
 static postForm(){
  return /*html*/`
  
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">List a New Dog</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="row" onsubmit="app.PostController.createPost()">
        <div class="modal-body">
        <label for="name">Dog Name</label>
          <div class="form-floating mb-3 col-12">
            <input type="text" class="form-control" id="name" name="name" placeholder="Dog Name">
          </div>
          <label for="Breed">Dog Breed</label>
          <div class="form-floating mb-3 col-12">
            <input required type="text" class="form-control" id="breed" name="breed" placeholder="dog breed">
          </div>
          <label for="age">Age</label>
          <div class="form-floating mb-3 col-12">
            <input required type="number" class="form-control" id="age" name="age" placeholder="age">
          </div>
          <label for="imageURL">Image URL</label>
          <div class="form-floating mb-3 col-12">
            <input required type="url" class="form-control" id="imageURL" name="imageURL" placeholder="imageURL">
          </div>
          <label for="description">description</label>
          <div class="form-floating mb-3 col-12">
            <textarea required type="text" class="form-control" id="description" name="description" placeholder="description">
            </textarea>
          </div>
          <div class="col-12">
            <select name="size" class="form-select" id="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">CLOSE</button>
              <button type="submit" class="btn btn-success">SUBMIT</button>
            </div>
      </form>
    </div>
    </div>
    </div>
  
  `
 }
}