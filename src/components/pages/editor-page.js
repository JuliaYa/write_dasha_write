import React, { Component } from 'react';

import SidePanel from '../side-panel';
import Editor from '../editor';

import './editor-page.css';

export default class EditorPage extends Component {

  render() {
    return (
      <div className="editor-page">
        <SidePanel />
        <div className="editor-container">
          <Editor />
        </div>
      </div>
    )
  }
}