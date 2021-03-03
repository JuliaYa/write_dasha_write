import React, { Component } from 'react';

import './author.css';

export default class AuthorPage extends Component {
  render() {
    const progressStyle = { width: '25%' };
    return (
      <div className="author-page">
        <div className="jumbotron">
          <h2>Novels:</h2>
          <ul className="list-group">
            <li className="list-group-item"><a href="/editor">My first novel</a></li>
            <li className="list-group-item">My second novel</li>
          </ul>
        </div>
        
        <div className="jumbotron">
          <h2>Analytics</h2>
          <div className="lead">Today progress:</div>
          <div class="progress">
            <div className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={ progressStyle }
                  ariaValuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
            </div>
          </div>
          <p>Go on! Your will do it.</p>
        </div>
      </div>
    )
  }
}