import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../context';
import Sidebar from '../components/Sidebar';

export default class HomePage extends Component {

  render() {
    return (
      <>
        <div className="columns is-centered">
          <div className="column">
          <Sidebar />
          </div>
          <div className="column box ironBox is-12">
            <div className="columns iron-height100">
              <div className="column is-7 iron-cover ironHome">
                <div className="column">
                  <h2 className="title is-4">El DASH</h2>
                  <p>Need to add stuffs</p>
                </div>
                <div className="column ironHome">
                  <Link className="button is-primary" to={'/signup'}>Sign up</Link>
                  <Link className="button is-primary" to={'/login'}>Log in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

HomePage.contextType = MyContext;