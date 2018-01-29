import {RECIPES_LOADED} from '../actions'
import {combineReducers} from 'redux'

const recipes = (state = null, action) => {
  switch (action.type) {
    case RECIPES_LOADED:
      return action.recipes
    default:
      return state
  }
}

export const rootReducer = combineReducers({recipes})
