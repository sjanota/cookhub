import {connect} from 'react-redux';
import Loading from './Loading';
import RecipesList from './RecipesList';
import {loadRecipes} from '../actions'

const mapStateToProps = state => {
  return {
    isReady: state.recipes != null,
    Child: RecipesList,
    recipes: state.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLoading: () => {
      console.log("start loading!")
      dispatch(loadRecipes())
    }
  }
}

const RecipesLoading = connect(mapStateToProps, mapDispatchToProps)(Loading);

export default RecipesLoading
