import React from 'react'

import { css } from 'glamor'
import { observer } from 'mobx-react'

import { primary } from '../theme'
import MultipleValueTextInput from 'react-multivalue-text-input';

import Storage from "@aws-amplify/storage";
import awsmobile from '../aws-exports'

const AddNewRecipe = observer(class AddNewRecipe extends React.Component {

  constructor() {
    super();
    this.state = {
      recipeGivenName: '',
      recipeDescription: '',
      selectedRecipeCuisine: '',
      showOptions: false,
      ingredients: [],
      possibleAllergens: [],
      recipeCuisines: [],
      recipeFileName: "",
      recipeFile: "",
      response: "",
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
      recipeGivenName: event.target.value
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



  createRecipe = async () => {
    try {
      console.log(
        this.state.ingredients,
        this.state.possibleAllergens,
        this.state.recipeDescription,
        this.state.selectedRecipeCuisine,
        this.state.recipeGivenName
      )
      this.setState({ response: `Uploading Recipe, Please wait...` });
      var level = "private";
      var message = "Success!"
      if (this.state.isPrivate) {
        level = "private";
        message = "Recipe Saved!"
      }
      else {
        level = "protected"
        message = "Recipe Shared"
      }
      Storage.configure({ 
        bucket: awsmobile.aws_s3_bucket_name,
        level: level,
        region: awsmobile.aws_appsync_region,  
        identityPoolId: awsmobile.aws_cognito_identity_pool_id
     });
      Storage.list(`userRecipes/`, { level: "private" }).then(result => {
        console.log("Private List resilt for given media view type", result)
      })
      Storage.list(`userRecipes/`, { level: "protected" }).then(result => {
        console.log("Protected List resilt for given media view type", result)
      })
      if (this.upload.files[0] !== undefined) {
        console.log("File name: '", this.upload.files[0].name, "'")
        Storage.put(`userRecipes/${this.upload.files[0].name}`,
          this.upload.files[0],
          { contentType: this.upload.files[0].type })
          .then(result => {
            console.log(result)
            this.upload = null;
            this.setState({ response: message });
          })
          .catch(err => {
            this.setState({ response: `Cannot uploading Recipe: ${err}` });
          });
      }
      else {
        this.setState({ response: `Browse Video before upload` });
      }
    } catch (err) {
      console.log('Error creating new recipe', err)
    }
  }

  toggleChange = event => {
    if (event.target.checked) {
      this.setState({
        isPrivate: true
      });
    }
    else {
      this.setState({
        isPrivate: false
      });
    }
  }

  render() {
    // const { username, email } = UserStore
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
                placeholder="Enter ingredients; separate them with COMMA or ENTER."
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
                placeholder="Enter possible allergens; separate them with COMMA or ENTER."
              /> </td>
          </tr>
        </table>
        <p {...css(styles.title)}>Upload Recipe Video</p>
        <input
          type="file"
          accept="video/mp4,video/x-m4v,video/*"
          style={{ display: "none" }}
          ref={ref => (this.upload = ref)}
          onChange={e =>
            this.setState({
              recipeFile: this.upload.files[0],
              recipeFileName: this.upload.files[0].name
            })
          }
        />
        <input value={this.state.recipeFileName} placeholder="Select file" />
        <button {...css(styles.button)}
          onClick={e => {
            this.upload.value = null;
            this.upload.click();
          }}
          loading={this.state.uploading}
        >
          Browse
        </button>

        {!!this.state.response && <div>{this.state.response}</div>}

        <p >Secret Recipe:
            <input type="checkbox"
            defaultChecked={true}
            id="recipe_make_protected"
            onChange={this.toggleChange} />
        </p>
        <div {...css(styles.createButton)}>
          <p {...css(styles.buttonText)} onClick={this.createRecipe}>Create</p>
        </div>
      </div>
    )
  }
})

const styles = {
  button: {
    margin: '10px 10px 0px',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  },
  createButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
