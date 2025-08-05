function displayRecipeData(answer) {
  loadingMessage.style.visibility = "hidden";
  let resultRecipe = answer.data.answer;
  let displayRecipe = document.getElementById("display-recipe");
  displayRecipe.innerHTML = `${resultRecipe}`;
  console.log(resultRecipe);
}
function searchRecipe(cuisine, protein) {
  loadingMessage.style.visibility = "visible";
  let context =
    "Please give short and consice answer. Answer must be only the recipe in the following format example:<h2>Spaguetti</h2> <h3>Ingredients:</> <ul> <li>Spagetti Pasta</li> <li>Tomato Sauce </li> <h3>Instructions:</h3><div>1.-Boil water.</div> <div>2.-add pasta and cook for 10 min </div>";
  let prompt = `please generate quick and easy ${cuisine} recipe using ${protein} as the main protein?`;
  let apiKey = "18o7a0b8f4af4db5fa386d3ft8f43fea";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipeData);
  //console.log(`The cuisine is ${cuisine} and the protein is ${protein}`);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let selectedCuisine = document.getElementById("cuisine-type");
  let selectedProtein = document.getElementById("protein-type");
  searchRecipe(selectedCuisine.value, selectedProtein.value);
}
let searchForm = document.getElementById("select-cuisine-protein");
let searchButton = document.getElementById("search-button");
let loadingMessage = document.getElementById("loading-message");
//console.log(searchForm);
searchForm.addEventListener("submit", handleSearchSubmit);
