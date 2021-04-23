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
export const onCreateVodAsset = /* GraphQL */ `
  subscription OnCreateVodAsset {
    onCreateVodAsset {
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
export const onUpdateVodAsset = /* GraphQL */ `
  subscription OnUpdateVodAsset {
    onUpdateVodAsset {
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
export const onDeleteVodAsset = /* GraphQL */ `
  subscription OnDeleteVodAsset {
    onDeleteVodAsset {
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
export const onCreateVideoObject = /* GraphQL */ `
  subscription OnCreateVideoObject {
    onCreateVideoObject {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateVideoObject = /* GraphQL */ `
  subscription OnUpdateVideoObject {
    onUpdateVideoObject {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteVideoObject = /* GraphQL */ `
  subscription OnDeleteVideoObject {
    onDeleteVideoObject {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
