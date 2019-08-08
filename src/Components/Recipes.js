import React from 'react';

const Recipes = (props) => (
	<div className="container">
		<div className="row">
			{ props.recipes.map((recipe) => {
	            return (
	            <div key={recipe.recipe_id} className="col-md-4" style={{ marginBottom:"2rem" }}>
	            	<div className="recipes__box">
	            		<img className="recipe__box-img" src = {recipe.image_url} alt = {recipe.title} />
	            		<div className="recipe__text">
	            			<h5> { recipe.title} </h5>
	            		</div>
			    	</div>
	            </div>
	            );
	          })
	        }
		</div>
	</div>
);

export default Recipes;