import React from 'react';
import Editor from '../editor';

import './app.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Write Dasha Write!</h1>
      </header>
      <div className="content">
        <p>Try our editor right now!</p>
        <div className="editor-container">
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;
