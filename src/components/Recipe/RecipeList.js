import React, { Component } from 'react';
import RecipeListItem from './RecipeListItem';
import axios from 'axios';

class RecipeList extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    axios.get('http://starlord.hackerearth.com/recipe')
    .then((response) => {
      this.setState({ recipes: response.data, isLoading: false})
    })
    .catch(
      error => console.log(error)
    )
  }

  render() {
    const divStyleMain = {
      margin: '3% 5% 5% 5%'
    };

  return (
    <div>
        <div className="card-group" style={divStyleMain}>
          <div className="container">
            <section className="ftco-section bg-light" id="cards">
              <div className="container card-styles">
                <div className="row">
                  {!this.state.isLoading && this.state.recipes.map((i, index) => {
                    return( 
                      <RecipeListItem 
                        key={index} 
                        recipe={i}
                      /> 
                    )
                  })}
                </div>
              </div>
            </section>   
          </div>
        </div>
    </div>
  );
  }
}

export default RecipeList;
