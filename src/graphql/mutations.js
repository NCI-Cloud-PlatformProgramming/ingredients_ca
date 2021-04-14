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
        category
        regionOriented
        mainIngredients
        possibleAllergens
        description
        mediaUrl
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
        category
        regionOriented
        mainIngredients
        possibleAllergens
        description
        mediaUrl
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
        category
        regionOriented
        mainIngredients
        possibleAllergens
        description
        mediaUrl
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
        category
        regionOriented
        mainIngredients
        possibleAllergens
        description
        mediaUrl
        likes
        dislikes
        isPrivate
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
        category
        regionOriented
        mainIngredients
        possibleAllergens
        description
        mediaUrl
        likes
        dislikes
        isPrivate
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
