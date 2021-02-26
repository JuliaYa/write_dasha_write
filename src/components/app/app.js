import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EditorPage from '../pages/editor-page';

import './app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1><Link to="/">Write Dasha Write!</Link></h1>
        </header>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <p><Link to="/editor-page">Try our editor right now!</Link></p>
            </Route>
            <Route path="/editor-page">
              <EditorPage />
            </Route>
          </Switch>
          {/* <EditorPage /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
