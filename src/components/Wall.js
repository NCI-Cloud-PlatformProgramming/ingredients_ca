import React from 'react'
import { css } from 'glamor'
import { withRouter } from 'react-router-dom'
import { primary } from '../theme'
import { listRecipies as ListRecipes, filterRecipieByName as FilterRecipeByName } from '../graphql'
import { API, graphqlOperation } from 'aws-amplify'
import VideoCards from '../components/VideoCards';

const videoOptions = {
  sources: [{
    src: ''
  }]
}

class Wall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      fullRecipeList: {
        data: {
          listRecipies: {
            items: []
          }
        }
      },
      filteredRecipeList: {
        data: {
          listRecipies: {
            items: []
          }
        }
      }
    }
    this.searchRecipe = this.searchRecipe.bind(this);
  }

  componentDidMount() {
    API.graphql(graphqlOperation(ListRecipes)).then(recipeList => {
      this.setState({
        fullRecipeList: recipeList,
        filteredRecipeList: recipeList
      })
      console.log("Full list: ", this.state.fullRecipeList)
    })
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  onSearchKeyChange = event => {
    if (event.target.value == '') {
      this.setState({
        filteredRecipeList: this.state.fullRecipeList
      })
    }
    this.setState({
      searchKeyword: event.target.value
    })
  }

  searchRecipe = event => {
    var searchKeywords = this.state.searchKeyword.split(" ")
    searchKeywords.forEach(searchKeyword => {
      API.graphql(graphqlOperation(FilterRecipeByName, { searchKeyword })).then(recipeList => {
        console.log("Recipe response:", recipeList)
        this.setState({
          filteredRecipeList: recipeList
        })
        console.log("Filtered list: ", this.state.filteredRecipeList)
      })
    });
  }

  render() {
    return (
      <div >
        <div>
          <input {...css(styles.searchField)}
            autocomplete="off"
            type="search"
            id="search_recipe"
            placeholder="Search Recipe..."
            onChange={this.onSearchKeyChange}>
          </input>
          <input {...css(styles.searchButton)}
            type="button"
            value="Go"
            onClick={this.searchRecipe}>
          </input>
        </div>
        <div {...css(styles.wall, styles.tableBorder)}>
          {this.state.filteredRecipeList.data.listRecipies.items.map(result =>
            <div {...css(styles.separateVideoContainer)}>
              <p {...css(styles.videoInformation)}>
                <strong {...css(styles.title)} >{result.name}: </strong>
              </p>
              {result.description !== "" ? <p {...css(styles.videoInformation)} ><strong {...css(styles.subTitle)} >Description: </strong>{result.description}</p> : <u></u>}
              <VideoCards {...videoOptions.sources[0] = { src: result.mediaUrl.replace("us-east-1.", "") }} />
              {result.cuisine !== "" ? <p {...css(styles.videoInformation)} > <strong {...css(styles.subTitle)} >Cuisine: </strong> {result.cuisine} </p> : <u></u>}
              {((result.ingredients.length != 0) || (result.possibleAllergens.length != 0)) ?
                <table {...css(styles.videoInformation, styles.tableBorder)} >
                  <thead >
                    {result.ingredients.length != 0 ? <th {...css(styles.ingredientsTableHeaderData, styles.tableBorder)} >Ingredients</th> : <u></u>}
                    {result.possibleAllergens.length != 0 ? <th {...css(styles.ingredientsTableHeaderData, styles.tableBorder)}>Possible Allergens</th> : <u></u>}
                  </thead>
                  <tbody {...css(styles.tableBorder)}>
                    <tr{...css(styles.tableBorder)}>
                      {result.ingredients.length != 0 ?
                        <td{...css(styles.tableBorder, styles.ingredientsTableData)}>
                          <ul {...css(styles.ulWithoutBullets)}>
                            {result.ingredients.map(ingredients =>
                              <li> {ingredients} </li>
                            )}
                          </ul>
                        </td> : <u></u>}
                      {result.possibleAllergens.length != 0 ?
                        <td {...css(styles.tableBorder, styles.ingredientsTableData)}>
                          <ul {...css(styles.ulWithoutBullets)}>
                            {result.possibleAllergens.map(possibleAllergens =>
                              <li> {possibleAllergens} </li>
                            )}
                          </ul>
                        </td> : <u></u>}
                    </tr>
                  </tbody>
                </table> : <u></u>}
            </div>
          )}
        </div>
      </div>

    )
  }
}

const styles = {
  searchField: {
    position: 'absolute',
    top: 50,
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  },
  searchButton: {
    position: 'absolute',
    width: '10%',
    top: 50,
    right: 0,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  },
  button: {
    margin: '100px 0px 0px',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer',
  },
  wall: {
    height: '80%',
    position: 'absolute',
    left: '50%',
    top: '55%',
    width: '100%',
    'overflow-y': 'scroll',
    transform: 'translate(-50%, -50%)'
  },
  video: {
    position: 'relative',
    margin: '10px 10px 10px'
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
  subTitle: {
    fontSize: 18,
    fontWeight: 500,
    margin: 0,
    borderBottom: `1px solid ${primary}`
  },
  videoInformation: {
    margin: '2px 10px 10px'
  },
  ingredientsTableHeaderData: {
    fontSize: 18,
    fontWeight: 500,
    margin: 0,
    'text-align': 'center'
  },
  ingredientsTableData: {
    'vertical-align': 'top',
    'text-align': 'left'
  },
  ulWithoutBullets: {
    'list-style-type': 'none'
  },
  tableBorder: {
    border: `1px solid ${primary}`
  },
  separateVideoContainer: {
    borderBottom: `2px solid ${primary}`,
    paddingBottom: 4
  }
}

export default withRouter(Wall)