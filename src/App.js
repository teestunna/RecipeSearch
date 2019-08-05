import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";

class App extends Component {

  getRecipe = (e) => {
      e.preventDefault();
      console.log("Working");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Chef</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
