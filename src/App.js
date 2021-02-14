import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Components/Recipe";

const App = () => {
    const APP_ID = "26b2ed05";
    const APP_KEY = "e0bcc1959f106db593f208f9aaaef866";
    const [recipes, setRecipes] = useState([]);
    const [search, setSeacrh] = useState('');
    const [query, setQuery] = useState('chicken');


    useEffect(() => {
        getRecipes();
    }, [query]);/*Runs only when smth in the brackets changed*/

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits[0].recipe)
    }

    const updateSeacrh = e => {
        if (e.target.value == '') {
            setSeacrh(e.target.value)
            setQuery('')
        } else {
            setSeacrh(e.target.value)
        }
    }


    const getSeach = e => {
        e.preventDefault();
        setQuery(search)
    }

    return (
        <div className="App">
            <form onSubmit={getSeach} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSeacrh}/>
                <button className="search-button"
                        type="submit">Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.label}
                            img={recipe.recipe.image}
                            calories={recipe.recipe.calories}
                            title={recipe.recipe.label}
                            ingriditents={recipe.recipe.ingredientLines}
                    />
                ))}
            </div>
        </div>
    )
}


export default App;
