import RecipesService from '../services/RecipesService'

export const RECIPES_LOADED = 'RECIPES_LOADED'

export function recipesLoaded(recipes) {
  return {type: RECIPES_LOADED, recipes}
}

export function loadRecipes() {
  return function(dispatch) {
    return RecipesService.getRecipes().then(function(response) {
      console.log(response);
      dispatch(recipesLoaded(response.data.data))
    }).catch(function(error) {
      console.log(error);
    });
  }
}
