/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipieLink = /* GraphQL */ `
  subscription OnCreateRecipieLink($recipieLinkUserId: ID!) {
    onCreateRecipieLink(recipieLinkUserId: $recipieLinkUserId) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($commentRecipieID: ID!) {
    onCreateComment(commentRecipieID: $commentRecipieID) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
