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
      mediaUrl
      likes
      dislikes
      comments {
        nextToken
      }
      associated {
        nextToken
      }
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
        mediaUrl
        likes
        dislikes
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
        mediaUrl
        likes
        dislikes
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
export const getVodAsset = /* GraphQL */ `
  query GetVodAsset($id: ID!) {
    getVodAsset(id: $id) {
      id
      title
      description
      video {
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listVodAssets = /* GraphQL */ `
  query ListVodAssets(
    $filter: ModelvodAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVodAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getVideoObject = /* GraphQL */ `
  query GetVideoObject($id: ID!) {
    getVideoObject(id: $id) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listVideoObjects = /* GraphQL */ `
  query ListVideoObjects(
    $filter: ModelvideoObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
