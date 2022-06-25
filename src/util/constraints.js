// --------- CONSTANTS ---------
export const REACT_APP_SPOONACULAR_API_KEY =
  process.env.REACT_APP_SPOONACULAR_API_KEY;

// set default value
export function createSpoonacularUrl(type = "random", CONFIG) {
  const baseUrl = "https://api.spoonacular.com/recipes/";
  const apiKey = `?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`;
  const number = CONFIG?.number ? `&number=${CONFIG?.number}` : "";
  const tag = CONFIG?.tag ? `&tags=${CONFIG?.tag}` : "";
  const cuisine = CONFIG?.cuisine ? `&cuisine=${CONFIG?.cuisine}` : "";
  const query = CONFIG?.query ? `&query=${CONFIG?.query}` : "";

  return `${baseUrl}${type}/${apiKey}${number}${tag}${cuisine}${query}`;
}
