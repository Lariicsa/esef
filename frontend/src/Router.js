import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddStudent from './pages/students/AddStudent'
import Signup from './components/Signup'
import AllStudents from './pages/students/AllStudents'
import StudentDetail from './pages/students/StudentDetail'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import AllGroups from './pages/groups/Groups'
import AddGroup from './pages/groups/AddGroup'
import GroupDetail from './pages/groups/GroupDetail'
import EditStudent from './pages/students/EditStudent'
import AddSchool from './pages/schools/AddSchool'
// import AllTeachers from './pages/teacher/AllTeachers'

const Router = () => (
  <section className="section">
    <div className="container">
    <BrowserRouter>
    <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/teachers/all" component={AllTeachers} /> */}
      <Route exact path="/groups/all" component={AllGroups} />
      <Route exact path="/groups/addgroup" component={AddGroup} />
      <Route exact path="/groups/all/:id" component={GroupDetail} />
      <Route exact path="/students/addstudent" component={AddStudent} />
      <Route exact path="/students/all" component={AllStudents} />
      <Route exact path="/students/students/:id" component={StudentDetail} />
      <Route exact path="/students/students/edit/:id" component={EditStudent} />
      <Route exact path="/schools/addschool" component={AddSchool} />
    </Switch>
  </BrowserRouter>
    </div>
  </section>
)

export default Router;
