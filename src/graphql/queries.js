/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      description
      dateOfBirth
      interestedCuisines
      recipies {
        nextToken
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        description
        dateOfBirth
        interestedCuisines
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipie = /* GraphQL */ `
  query GetRecipie($id: ID!) {
    getRecipie(id: $id) {
      id
      name
      category
      regionOriented
      mainIngredients
      possibleAllergens
      description
      mediaUrl
      likes
      dislikes
      comments {
        nextToken
      }
      associated {
        nextToken
      }
      isPrivate
      createdAt
      updatedAt
      user
    }
  }
`;
