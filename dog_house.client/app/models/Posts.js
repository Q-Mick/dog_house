export class Post{
  constructor(data){
    this.name = data.name
    this.breed = data.breed
    this.age = data.age
    this.size = data.size
    this.creatorId = data.creatorId
    this.img = data.imageUrl || "https://static.onecms.io/wp-content/uploads/sites/47/2021/06/21/black-and-white-dog-hero-2000.jpg"
    
  }
  get postTemplate(){
    return /*html*/`
    <div class="col-4 p-2">
        <div class="m-1 dog-card"> 
          <img
            class="dog-image img-fluid rounded-top"
            src=${this.img}
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
 static postForm(){
  return /*html*/`
  <div class="modal fade" id="postModal" tabindex="-1" aria-labelledby="exampleModella" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">List a New Dog</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="row" onsubmit="app.PostController.createPost()">
        <div class="modal-body">
          <div class="form-floating mb-3 col-12">
            <input type="text" class="form-control" id="name" name="name" placeholder="Dog Name">
            <label for="name">Dog Name</label>
          </div>
          <div class="form-floating mb-3 col-12">
            <input required type="url" class="form-control" id="img" name="img" placeholder="dog Image">
            <label for="img">Dog Image</label>
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