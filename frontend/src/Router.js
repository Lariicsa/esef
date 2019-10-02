import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddStudent from './pages/profesor/AddStudent'
import Signup from './components/Signup'
import AllStudents from './pages/profesor/AllStudents'
import StudentDetail from './pages/profesor/StudentDetail'
import Login from './components/Login'
import Dashboard from './pages/profesor/Dashboard'
import AllGroups from './pages/groups/Groups'
import AddGroup from './pages/groups/AddGroup'
import GroupDetail from './pages/groups/GroupDetail'


const Router = () => (
  <section className="section ironSection">
    <div className="container">
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/groups/all" component={AllGroups} />
      <Route exact path="/groups/addgroup" component={AddGroup} />
      <Route exact path="/groups/all/:id" component={GroupDetail} />
      <Route exact path="/profesor/addstudent" component={AddStudent} />
      <Route exact path="/profesor/viewstudents" component={AllStudents} />
      <Route exact path="/profesor/students/:id" component={StudentDetail} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
    </div>
  </section>
)

export default Router;
