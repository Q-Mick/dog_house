import { AppState } from "../AppState.js";
import { favoritesService } from "../services/FavoritesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
function _drawFavorites(){
  let template = ''
  AppState.favorite.forEach(f => template += f.favoriteTemplate)
  setHTML('favorites', template)

}
export class FavoritesController{
  constructor(){
    AppState.on('favorite', _drawFavorites)
  }
  async favoritePicture(){
    try {
      let favorite = AppState.favorite
      await favoritesService.favoriteDog(favoriteData)
    } catch (error) {
      Pop.error(error)
    }
  }
  

}