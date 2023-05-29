import { AppState } from "../AppState.js"

export class Post {
  constructor(data) {
    this.name = data.name
    this.breed = data.breed
    this.age = data.age
    this.size = data.size
    this.creatorId = data.creatorId
    this.imageURL = data.imageURL
    this.id = data.id
    this.description = data.description
    this.likeCount = data.likeCount
    this.liker = data.postLiker
    // this.posterName = data.postLiker.name
  }
  get postTemplate() {
    return /*html*/ `
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
            <p onclick="app.LikeController.becomeLiker('${this.id}')" class="p-1 mt-2 fs-5" id="likes">
              <i class="mdi mdi-thumb-up"></i>${this.likeCount}
            </p>
          </div>
        </div>
      </div>

    `
  }

  static activeTemplate() {
    return /*html*/ `
    <div class="row p-1 border-4 border border-dark elevation-5 m-0 bg-secondary">
    <div class="col-7">
      <img class="border border-info border-3 activeDog " src="${
        // @ts-ignore
        AppState.activePost.imageURL
      }" alt="">
    </div>
    <div class="col-5 m-0">
      <p class="my-1 mx-1"><span class="fw-bold">Name: </span>${
        // @ts-ignore
        AppState.activePost.name
      }</p>
      <p class="my-1 mx-1"> <span class="fw-bold">Breed:</span> ${
        // @ts-ignore
        AppState.activePost.breed
      }</p>
      <p class="my-1 mx-1"><span class="fw-bold">Age:</span> ${
        // @ts-ignore
        AppState.activePost.age
      }</p>
      <p class="my-1 mx-1"><span class="fw-bold">Size:</span> ${
        // @ts-ignore
        AppState.activePost.size
      }</p>
      <p class="my-1 mx-1"><span class="fw-bold">Description:</span> ${
        // @ts-ignore
        AppState.activePost.description
      }</p>
    </div>
  
   <div class="row m-1">
   <div class=" p-1 col-12 border-3 border border-info m-0 p-1 rounded " id="comments">
   <p class="mx-2"><em class="fs-3 mdi mdi-account-box">comments:</em></p>
   <div class="">
   <p class="elevation-4 mx-2 bg-light border border-3 border-dark mdi mdi-account-box p-3"> this is a comment</p>
   </div>
   </div>
   <div class="row">
   <div class="col-12 d-flex justify-content-between">
   <button class="mx-2 my-1">add Comment<i class="mdi mdi-comment">
   </i></button>
   <button class="mx-2 my-1">favorite<i class="mdi mdi-star">
   </i></button>
   </div>
   </div>
   </div>
  </section>
  `
  }
  static postForm() {
    return /*html*/ `
  
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Create your Post!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="row" onsubmit="app.PostController.createPost()">
        <div class="modal-body">
        <label for="name">Dog Name</label>
        <div class="input-group input-group-sm mb-3 col-6">
        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
        <input type="text" class="form-control" name="name" id="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
    
          <label for="Breed">Dog Breed</label>
          <div class="input-group input-group-sm mb-3 col-6">
          <span class="input-group-text" id="inputGroup-sizing-sm">Breed</span>
          <input type="text" class="form-control" name="breed" id="breed" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
          </div>

         <label for="Breed">Age</label>
          <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Age</span>
          <input type="text" class="form-control" name="age" id="age" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
          </div>

          <div class="mb-3">
  <label for="basic-url" class="form-label">Image URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">Image URL</span>
    <input required type="text" class="form-control" id="imageURL" name="imageURL" aria-describedby="basic-addon3 basic-addon4">
  </div>
  <div class="form-text" id="basic-addon4">Paste the link to your image</div>
</div>

<label for="description">Size</label>
<div class="col-12">
  <select name="size" class="form-select" id="size">
    <option selected>Open this to select your pups size</option>
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
  </select>
</div>
<label for="description">Description</label>
<div class="input-group">

<textarea class="form-control" aria-label="" id="description" name="description"></textarea>
</div>
          <div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">CLOSE</button>
              <button type="submit" class="btn btn-success" data-bs-dismiss="modal">SUBMIT</button>
            </div>
      </form>
    </div>
    </div>
    </div>
  
  `
  }
}
