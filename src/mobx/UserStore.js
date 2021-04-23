import { API, graphqlOperation, Auth } from 'aws-amplify'
import { getUserByEmail as GetUserByEmail, getUser as createUser } from '../graphql'

import { observable, decorate } from 'mobx'

class User {
  username = ''
  email = ''
  async init() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.username = user.username
      this.email = user.signInUserSession.idToken.payload.email
    } catch (err) {
      console.log('error getting user data... ', err)
    }
    // check if user exists in db, if not then create user
    if (this.username !== '') {
      this.checkIfUserExists(this.email)
    }
  }

  async checkIfUserExists(email) {
    try {
      var user = await API.graphql(graphqlOperation(GetUserByEmail, {email}))
      var getUser = user.data.listUsers.items[0]
      if (!getUser) {
        this.createUser()
        user = await API.graphql(graphqlOperation(GetUserByEmail, {email}))
        getUser = user.data
      } 
    } catch (err) {
      console.log('error fetching user: ', err)
    }
  }

  async createUser() {
    try {
      await API.graphql(graphqlOperation(createUser,
        { 
            email: this.email,
            username: this.username
        }))
    } catch (err) {
      console.log('Error creating user! :', err)
    }
  }
}

decorate(User, {
  username: observable,
  email: observable
});

export default new User()
