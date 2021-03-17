import React, { Component } from 'react'
import Header from './Components/Header/Header'
import BlogFront from './Components/BlogFront/BlogFront'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogBack from './Components/BlogBack/BlogBack'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
        <Switch>
        <Route path='/' exact component={BlogFront}/>
        <Route path='/:id' exact component={BlogBack}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

