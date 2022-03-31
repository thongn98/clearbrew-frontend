import React from "react";
import './Explore.css';

import { Button} from 'react-bootstrap';
/*
import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
*/

var user = {email: "123@gmail.com", mostCommonRecipes: [1,2], numRecipesCompleted: 4, password: "dummypassword3",
            recipesCompleted: [1,1,2,2], userID: 3, username: "111"}
var recipes = [{
  estimatedTime: 600,
  name: "Simple Arabica Pour-over",
  numSteps: 11,
  rating: 4.5,
  recipeID: 0,
  steps: [ { description: "Measure your brew ratio (1:17 coffee:water)", stepType: "action", targetValue: 60  }], 
  brewer: "Chemex",
  species: "Arabica",
  origin: "",
  roasts: "dark"
},
{
  estimatedTime: 600,
  name: "Simple Arabica Pour-over",
  numSteps: 11,
  rating: 4.5,
  recipeID: 0,
  steps: [ { description: "Measure your brew ratio (1:17 coffee:water)", stepType: "action", targetValue: 60  }], 
  brewer: "Chemex",
  species: "Arabica",
  origin: "",
  roasts: "dark"
}]

async function addRecipe(r) {                           //send the data to API
  const data = {
    body: {
      estimatedTime: r.estimatedTime,
      name: r.name,
      numSteps: r.numSteps,
      rating: r.rating,
      recipeID: r.recipeID,
      steps: r.steps,
      brewer: r.brewer,
      species: r.species,
      origin: r.origin,
      roasts: r.roasts
    }
  };
  console.log(data);
  //const response = await API.get('formapi', 'path + "/"+ currentUser' );   //how to get current user?
  //const user = await response.json();
  //const apiData = await API.post('formapi', 'path + "/" + user.id + "/" + "mostCommonRecipes"', JSON.stringify(data.body));       //?
}

function Explore() {
    //const myInit = {};
/*
API.get(apiName, path, myInit)
  .then(response => {
    return response.json();
  }).then(data => {recipes = data})       //??
  .catch(error => {
    console.log(error.response);
 });
*/

  return (
    <div class = "AllRecipes">
    <h3 class ="header">All Recipes</h3>
      <table>
               <tr>
                <th style={{fontSize: '20px'}}>Name&nbsp;&nbsp;&nbsp;</th>
                <th style={{fontSize: '20px'}}># of Steps&nbsp;&nbsp;&nbsp;</th>
                <th style={{fontSize: '20px'}}>Time&nbsp;&nbsp;&nbsp;</th>
                <th style={{fontSize: '20px'}}>Rating&nbsp;&nbsp;&nbsp;</th>
                <th style={{fontSize: '20px'}}>Brewer&nbsp;&nbsp;&nbsp;</th>
                <th style={{fontSize: '20px'}}>Species&nbsp;&nbsp;&nbsp;</th>
                <th style={{fontSize: '20px'}}>Origin&nbsp;&nbsp;&nbsp;</th>
                <th style={{fontSize: '20px'}}>Roasts</th>
               </tr>
        {recipes.map(r => (
              <tr>
               <td style={{fontSize: '15px'}}>{r.name}</td>
               <td style={{fontSize: '15px'}}>{r.numSteps}</td>
               <td style={{fontSize: '15px'}}>{r.estimatedTime}</td>
               <td style={{fontSize: '15px'}}>{r.rating}</td>
               <td style={{fontSize: '15px'}}>{r.brewer}</td>
               <td style={{fontSize: '15px'}}>{r.species}</td>
               <td style={{fontSize: '15px'}}>{r.origin}</td>
               <td style={{fontSize: '15px'}}>{r.roasts}</td>
               <Button onClick={function(){addRecipe(r)}}>Add</Button>
              </tr>
         ) )}
      </table>
     </div>

  );
}

export default Explore;