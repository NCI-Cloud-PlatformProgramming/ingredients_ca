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
      owner
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
        owner
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
      cuisine
      ingredients
      possibleAllergens
      description
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
export const listRecipies = /* GraphQL */ `
  query ListRecipies(
    $filter: ModelRecipieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cuisine
        ingredients
        possibleAllergens
        description
        likes
        dislikes
        isPrivate
        createdAt
        updatedAt
        user
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      createdBy
      recipie {
        id
        name
        cuisine
        ingredients
        possibleAllergens
        description
        likes
        dislikes
        isPrivate
        createdAt
        updatedAt
        user
      }
      author {
        id
        username
        email
        description
        dateOfBirth
        interestedCuisines
        createdAt
        updatedAt
        owner
      }
      authorId
      commentRecipieID
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        createdBy
        authorId
        commentRecipieID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
