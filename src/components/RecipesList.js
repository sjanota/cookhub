import React from 'react';
import PropTypes from 'prop-types';

const RecipesList = ({recipes}) => {
  console.log(recipes)
  return (<div>
    <p>Recipes:</p>
    <ul>
      {recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
    </ul>
  </div>)
}

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipesList;
