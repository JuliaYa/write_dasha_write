import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EditorPage from '../pages/editor/editor-page';
import AuthorPage from '../pages/author';

import './app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">WriteDashaWrite</a>

          <a href="/author" className="sign-in my-2 my-lg-0">SignIn</a>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <h2 ><Link to="/editor">Try our editor right now!</Link></h2>
            </Route>
            <Route path="/editor">
              <EditorPage />
            </Route>
            <Route path="/author">
              <AuthorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
