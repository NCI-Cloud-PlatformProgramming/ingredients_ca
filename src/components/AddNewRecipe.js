import React from 'react'

import { css } from 'glamor'
import { observer } from 'mobx-react'

import UserStore from '../mobx/UserStore'
import { primary } from '../theme'
import MultipleValueTextInput from 'react-multivalue-text-input';

const AddNewRecipe = observer(class AddNewRecipe extends React.Component {

  constructor() {
    super();
    this.state = {
      recipeName: '',
      recipeDescription: '',
      selectedRecipeCuisine: '',
      showOptions: false,
      ingredients: [],
      possibleAllergens: [],
      recipeCuisines: [],
      isPrivate: true
    }
    this.onRecipeNameChange = this.onRecipeNameChange.bind(this);
    this.onRecipeCuisineChange = this.onRecipeCuisineChange.bind(this);
    this.onRecipeDescriptionChange = this.onRecipeDescriptionChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      recipeCuisines: [
        { value: 'Select Cuisine Type', display: 'Select Cuisine Type' },
        { value: 'Indian', display: 'Indian' },
        { value: 'Chinese', display: 'Chinese' },
        { value: 'Japanese', display: 'Japanese' },
        { value: 'American', display: 'American' },
        { value: 'French', display: 'French' },
        { value: 'English', display: 'English' }]
    });
  }

  onRecipeNameChange = event => {
    this.setState({
      recipeName: event.target.value
    })
  }

  onRecipeDescriptionChange = event => {
    this.setState({
      recipeDescription: event.target.value
    })
  }

  onRecipeCuisineChange = event => {
    console.log(event.target.value)
    this.setState({
      showOptions: (event.target.value !== '') ? true : false,
      selectedRecipeCuisine: event.target.value,
      validationError: event.target.value === "" ? "You must select a Cuisine" : ""
    });
  }

  toggleChange = event => {
    if (event.target.checked) {
      this.setState({
        isPrivate: false
      });
    }
    else {
      this.setState({
        isPrivate: true
      });
    }
  }

  createRecipe = async () => {
    try {
      console.log(
        this.state.ingredients,
        this.state.isPrivate,
        this.state.possibleAllergens,
        this.state.recipeDescription,
        this.state.selectedRecipeCuisine,
        this.state.recipeName
        )
    } catch (err) {
      console.log('Error creating new recipe', err)
    }
  }

  render() {
    const { username, email } = UserStore
    return (
      <div {...css(styles.container)}>
        <p {...css(styles.title)}>Add New Recipe</p>
        <table name="recipe_creation_form" width="100%">
          <tr {...css(styles.recipeEntry)}>
            <td {...css(styles.recipeKey)}>Name: </td>
            <td {...css(styles.recipeValue)}><input type="text" id="recipe_name" 
            {...css(styles.valueField)}
            onChange={this.onRecipeNameChange}></input></td>
          </tr>
          <tr {...css(styles.recipeEntry)}>
            <td {...css(styles.recipeKey)}>Description: </td>
            <td {...css(styles.recipeValue)}><textarea id="recipe_description" 
            {...css(styles.valueField)}
            onChange={this.onRecipeDescriptionChange}></textarea></td>
          </tr>
          <tr {...css(styles.recipeEntry)}>
            <td {...css(styles.recipeKey)}>Cuisine: </td>
            <td {...css(styles.recipeValue)}>
              <select
                id="recipeCuisines" value={this.state.selectedRecipeCuisine}
                onChange={this.onRecipeCuisineChange}>
                {this.state.recipeCuisines.map((recipeCuisine) => <option key={recipeCuisine.value} value={recipeCuisine.value}
                  title={this.state.selectedRecipeCuisine}>
                  {recipeCuisine.display}
                </option>)
                }
              </select>
            </td>
          </tr>
          <tr {...css(styles.recipeEntry)}>
            <td {...css(styles.recipeKey)}>Ingredients: </td>
            <td {...css(styles.recipeValue)}>
              <MultipleValueTextInput
                onItemAdded={(item, allItems) =>
                  this.setState({
                    ingredients: allItems
                  })
                }
                onItemDeleted={(item, allItems) =>
                  this.setState({
                    ingredients: allItems
                  })
                }
                name="recipe_ingredients"
                placeholder="Enter whatever items you want; separate them with COMMA or ENTER."
              /> </td>
          </tr>
          <tr {...css(styles.recipeEntry)}>
            <td {...css(styles.recipeKey)}>Allergens: </td>
            <td {...css(styles.recipeValue)}>
              <MultipleValueTextInput
                onItemAdded={(item, allItems) =>
                  this.setState({
                    possibleAllergens: allItems
                  })
                }
                onItemDeleted={(item, allItems) =>
                  this.setState({
                    possibleAllergens: allItems
                  })
                }
                name="recipe_allergens"
                placeholder="Enter whatever items you want; separate them with COMMA or ENTER."
              /> </td>
          </tr>
          <tr {...css(styles.recipeEntry)}>
            <td {...css(styles.recipeKey)}>Make Public: </td>
            <td >
              <input type="checkbox"
                defaultChecked={false}
                id="recipe_make_public"
                onChange={this.toggleChange}
              />
            </td>
          </tr>
        </table>
        <div {...css(styles.button)}>
          <p {...css(styles.buttonText)} onClick={this.createRecipe}>Create</p>
        </div>
      </div>
    )
  }
})

const styles = {
  button: {
    margin: '100px 0px 0px',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  },
  buttonText: {
    fontWeight: 500
  },
  container: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    margin: 0,
    borderBottom: `2px solid ${primary}`,
    paddingBottom: 4
  },
  recipeKey: {
    width: 100,
    "text-align": "left"
  },
  recipeEntry: {
    height: 50,
    width: 100
  },
  recipeValue: {
    'text-align': 'center',
    'vertical-align': 'middle'
  },
  valueField: {
    width: "75%"
  }
}

export default AddNewRecipe
