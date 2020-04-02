import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Components/Recipe';
import RecipeIngr from './Components/RecipeIngr';

const App = () => {
  const API_ID = "41d54d75"
  const API_KEY = "dd6be63ef848ed24366c0340af7d0759"

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [search2, setSearch2] = useState('');
  const [query, setQuery] = useState()

  useEffect(() => {
    getRecipe()
  }, [query])

  const getRecipe = () => {
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    .then(response => setRecipe(response.data.hits))
  }

  const getSearch = (event) => {
    setSearch(event.target.value)
    // console.log(search) // logs what is being input into the search field text.
  }

  const getSearch2 = (event) => {
    setSearch2(event.target.value)
    // console.log(search) // logs what is being input into the search field text.
  }

  const updateChange = (event) => {
    event.preventDefault();
    setQuery(search + ' and ' + search2);
    setSearch('');
    setSearch2('');

  }

  console.log(recipe); // logs the search results of recipe's info

  return (
    <div className="App"> 
      <form onSubmit={updateChange}>
        <input type="text" placeholder="ingredient 1" value={search} onChange={getSearch}/>
        <input type="text" placeholder="ingredient 2" value={search2} onChange={getSearch2}/>
        <button type="submit">
          Search
        </button>
      </form>

      {/* mapping through each recipe result from the query */}
      {recipe.map(e => (
        <div>
        <Recipe key={e.recipe.label} title={e.recipe.label} 
                calories={e.recipe.calories} image={e.recipe.image} 
                url={e.recipe.url}/>
        <h3>Ingredients</h3>
        {e.recipe.ingredients.map(i => (
          <RecipeIngr key={Math.random()} ing={i.text}/>
        ))}
        </div>
      ))}

    </div>

  );
}

export default App;
