// --------- CONSTANTS ---------
export const REACT_APP_SPOONACULAR_API_KEY =
  process.env.REACT_APP_SPOONACULAR_API_KEY;

export function createSpoonacularUrl(NUMBER_OF_RECIPES, SEARCH_TERM) {
  return `https://api.spoonacular.com/recipes/${SEARCH_TERM}?apiKey=${REACT_APP_SPOONACULAR_API_KEY}&number=${NUMBER_OF_RECIPES}`;
}
