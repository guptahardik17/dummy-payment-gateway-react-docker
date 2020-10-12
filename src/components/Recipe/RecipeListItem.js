import React from 'react';  
import { Link, } from "react-router-dom";

function RecipeListItem(props) {
    return (
        <div className="col-md-4" style={{marginTop: '20px'}} key={props.index}>
            <div className="card">
                <img className="card-img-top" src={props.recipe.image} alt={props.index} style={{maxHeight: 150}}/>
                <div className="card-body">
                    <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{props.recipe.name}</h5>
                    <p className="card-text" style={{ minHeight: 100}}>{props.recipe.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price: </strong>{ '$' + props.recipe.price}</li>
                    <li className="list-group-item"><strong>Category: </strong>{props.recipe.category.charAt(0).toUpperCase() + props.recipe.category.slice(1)}</li>
                </ul>

                <Link to={{pathname: `/payment-page`, state: { fromRecipe: true, price: props.recipe.price }}} >
                    <div className="card-footer text-muted">Buy Now</div>
                </Link>
            </div>
        </div>   
    ) 
} 

export default RecipeListItem;