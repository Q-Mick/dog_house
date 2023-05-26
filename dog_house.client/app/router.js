import { PostController } from "./controllers/PostController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { PostView } from "./views/PostView.js";
import { HomeView } from "./views/HomeView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: HomeController,
    view: HomeView
  },
  {
    path: '#/post',
    controller: PostController,
    view: PostView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */