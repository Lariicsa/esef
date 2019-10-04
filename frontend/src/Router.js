import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddStudent from './pages/profesor/AddStudent'
import Signup from './components/Signup'
import AllStudents from './pages/profesor/AllStudents'
import StudentDetail from './pages/profesor/StudentDetail'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import AllGroups from './pages/groups/Groups'
import AddGroup from './pages/groups/AddGroup'
import GroupDetail from './pages/groups/GroupDetail'
import EditStudent from './pages/profesor/EditStudent'

const Router = () => (
  <section className="section">
    <div className="container">
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Dashboard} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/groups/all" component={AllGroups} />
      <Route exact path="/groups/addgroup" component={AddGroup} />
      <Route exact path="/groups/all/:id" component={GroupDetail} />
      <Route exact path="/profesor/addstudent" component={AddStudent} />
      <Route exact path="/profesor/all" component={AllStudents} />
      <Route exact path="/profesor/students/:id" component={StudentDetail} />
      <Route exact path="/profesor/students/edit/:id" component={EditStudent} />
    </Switch>
  </BrowserRouter>
    </div>
  </section>
)

export default Router;
