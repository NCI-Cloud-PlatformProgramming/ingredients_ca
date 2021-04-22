/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRecipie = /* GraphQL */ `
  mutation CreateRecipie(
    $input: CreateRecipieInput!
    $condition: ModelRecipieConditionInput
  ) {
    createRecipie(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      user
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createRecipieLink = /* GraphQL */ `
  mutation CreateRecipieLink(
    $input: CreateRecipieLinkInput!
    $condition: ModelRecipieLinkConditionInput
  ) {
    createRecipieLink(input: $input, condition: $condition) {
      id
      user {
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
      recipieLinkUserId
      recipie {
        id
        name
        cuisine
        ingredients
        possibleAllergens
        description
        likes
        dislikes
        createdAt
        updatedAt
        user
      }
      recipieLinkRecipieId
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipieLink = /* GraphQL */ `
  mutation UpdateRecipieLink(
    $input: UpdateRecipieLinkInput!
    $condition: ModelRecipieLinkConditionInput
  ) {
    updateRecipieLink(input: $input, condition: $condition) {
      id
      user {
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
      recipieLinkUserId
      recipie {
        id
        name
        cuisine
        ingredients
        possibleAllergens
        description
        likes
        dislikes
        createdAt
        updatedAt
        user
      }
      recipieLinkRecipieId
      createdAt
      updatedAt
    }
  }
`;
export const createVodAsset = /* GraphQL */ `
  mutation CreateVodAsset(
    $input: CreateVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    createVodAsset(input: $input, condition: $condition) {
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
export const updateVodAsset = /* GraphQL */ `
  mutation UpdateVodAsset(
    $input: UpdateVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    updateVodAsset(input: $input, condition: $condition) {
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
export const deleteVodAsset = /* GraphQL */ `
  mutation DeleteVodAsset(
    $input: DeleteVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    deleteVodAsset(input: $input, condition: $condition) {
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
export const createVideoObject = /* GraphQL */ `
  mutation CreateVideoObject(
    $input: CreateVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    createVideoObject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateVideoObject = /* GraphQL */ `
  mutation UpdateVideoObject(
    $input: UpdateVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    updateVideoObject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteVideoObject = /* GraphQL */ `
  mutation DeleteVideoObject(
    $input: DeleteVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    deleteVideoObject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
