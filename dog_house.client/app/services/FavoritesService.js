import { AppState } from "../AppState.js"
import { Favorite } from "../models/Favorite.js"
import { api } from "./AxiosService.js"

class FavoritesService{
  async favoriteDog(favoriteData) {
    const res = await api.post('api/posts')
    AppState.favorite.push(new Favorite(res.data))
    AppState.emit('favorite')
  }

}
export const favoritesService = new FavoritesService()