import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddStudent from './pages/profesor/AddStudent'
import Signup from './components/Signup'
import ViewStudent from './pages/profesor/ViewStudent'


const Router = () => (
  <section className="section ironSection">
    <div className="container">
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profesor/addstudent" component={AddStudent} />
      <Route exact path="/profesor/viewstudent" component={ViewStudent} />
    </Switch>
  </BrowserRouter>
    </div>
  </section>
)

export default Router;
