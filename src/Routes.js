import React from 'react'
import { Switch, Route } from "react-router-dom"

import Wall from './components/Wall'
import Profile from './components/Profile'
import AddNewRecepie from './components/AddNewRecepie';
//import Footer from './components/Footer'

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Wall} />
      <Route path="/wall" exact component={Wall} />
      <Route path="/profile/" component={Profile} />
      <Route path="/wall/addNewRecipie" component={AddNewRecepie} />
      <Route component={() => <p>404 no route found</p>} />
    </Switch>
    {/* <Footer /> */}
  </div>
)

export default Routes