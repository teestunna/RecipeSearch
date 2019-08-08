import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

const API_KEY = 'fd076c8f8ff6b79eb2ea3aaa369fab91';

class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {

    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15`);

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
        <Form name={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
