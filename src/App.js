import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";

const API_KEY = 'fd076c8f8ff6b79eb2ea3aaa369fab91';

class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {

    // eslint-disable-next-line
      const recipeName = e.target.elements.recipeName.value;
      e.preventDefault();

      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);

      const data = await api_call.json();
      this.setState({ recipes : data.recipes })
      console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Chef</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <br />
        { this.state.recipes.map((recipe) => {
            return <p key={recipe.recipe_id}>{recipe.title}</p>
        })}
      </div>
    );
  }
}

export default App;
