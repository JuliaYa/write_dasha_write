import React, { Component } from 'react';

import './side-panel.css';

export default class SidePanel extends Component {
  render() {
    return(
      <aside className="side-panel">
        <h2>My First Book</h2>

        <h3>Structure:</h3>
        <ul className="book-structure">
          <li>Prologue</li>
          <li>Chapter 1</li>
          <li>Chapter 2</li>
          <li>Chapter 3</li>
          <li>Epilogue</li>
        </ul>

        <h3>Characters</h3>
        <ul className="characters">
          <li>Prolog</li>
          <li>Chapter 1</li>
          <li>Chapter 2</li>
        </ul>
      </aside>
    );
  }
};
