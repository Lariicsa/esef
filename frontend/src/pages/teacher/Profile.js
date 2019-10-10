import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
          <>
           
            <div className="container">
              <section className="section">
                  
                <div className="columns is-centered">
                  <div className="column is-10">
                    <div className="field has-addons">
                      <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Find a repository" />
                        </div>
                        <div className="control">
                          <a href="/" className="button is-info">Search</a>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div id="firstRow" className="columns is-centered">
                    <div className="column is-10">
                      <div className="notification is-warning">
                        Be careful with life
                  </div>
    
                      <form className="box" onSubmit={this.some}>
                        <div className="field">
                          <label className="label">Name</label>
                          <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                          </div>
                        </div>
    
                        <div className="field">
                          <label className="label">Username</label>
                          <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="text" placeholder="Text input" />
                            <span className="icon is-small is-left">
                              <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"></i>
                            </span>
                          </div>
                          <p className="help is-success">This username is available</p>
                        </div>
    
                        <div className="field">
                          <label className="label">Email</label>
                          <div className="control has-icons-left has-icons-right">
                            <input className="input is-danger" type="email" placeholder="Email input" />
                            <span className="icon is-small is-left">
                              <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                              <i className="fas fa-exclamation-triangle"></i>
                            </span>
                          </div>
                          <p className="help is-danger">This email is invalid</p>
                        </div>
    
                        <div className="field">
                          <label className="label">Subject</label>
                          <div className="control">
                            <div className="select">
                              <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                              </select>
                            </div>
                          </div>
                        </div>
    
                        <div className="field">
                          <label className="label">Message</label>
                          <div className="control">
                            <textarea className="textarea" placeholder="Textarea"></textarea>
                          </div>
                        </div>
    
                        <div className="field">
                          <div className="control">
                            <label className="checkbox">
                              <input type="checkbox" />
                              I agree to the <a href="/">terms and conditions</a>
                            </label>
                          </div>
                        </div>
    
                        <div className="field">
                          <div className="control">
                            <label className="radio">
                              <input type="radio" name="question" />
                              Yes</label>
                            <label className="radio">
                              <input type="radio" name="question" />
                              No</label>
                          </div>
                        </div>
    
                        <div className="buttons is-right">
                          <button className="button is-link is-medium">Submit</button>
                        </div>
    
                      </form>
    
    
                    </div>
                  </div>
    
                  <div id="secondRow" className="columns is-centered">
                    <div className="column is-5">
                      <div className="box">
                        <h1 className="title is-1">Title head 1</h1>
                        <h1 className="title is-2">Title head 2</h1>
                        <h1 className="title is-3">Title head 3</h1>
                      </div>
                    </div>
    
                    <div className="column is-5">
                      <div className="box">
                        <h1 className="subtitle is-1">Subtitle head 1</h1>
                        <h1 className="subtitle is-2">Subtitle head 2</h1>
                        <h1 className="subtitle is-3">Subtitle head 3</h1>
                      </div>
                    </div>
                  </div>
              </section>
            </div>
              <footer className="footer">
                Iron UI for everyone
            </footer>
          </>
            );
          }
}
