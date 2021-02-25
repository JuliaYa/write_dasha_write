import React, { Component } from 'react';
import EditorJs from 'react-editor-js';

import EDITOR_JS_TOOLS from './tools';

export default class Editor extends Component {
  state = {
    data: {
      time: 1552744582955,
      blocks: [
        {
          "type" : "header",
          "data" : {
              "text" : "My First Book",
              "level" : 1
          }
        },
        {
          "type" : "header",
          "data" : {
              "text" : "Chapter 1",
              "level" : 3
          }
        },
        {
            "type" : "paragraph",
            "data" : {
                "text" : "Lorem ipsum dolor sit amet, <mark class=\"cdx-marker\">consectetur adipiscing elit</mark>. Integer elit magna, pharetra eget mattis nec, scelerisque at urna. Cras cursus eros sit amet turpis commodo malesuada. Quisque sagittis urna enim, in vestibulum enim eleifend a. Donec nibh leo, tincidunt ac dapibus a, bibendum vel metus. Nam non sem at enim bibendum dictum. <mark class=\"cdx-marker\">Sed tempor velit sit amet ante congue, a fermentum dui laoreet. In sit amet augue magna. Integer suscipit rutrum maximus.</mark> Curabitur vitae nulla tellus. Ut lobortis posuere efficitur."
            }
        },
        {
          "type" : "paragraph",
          "data" : {
              "text" : "Quisque elementum leo sapien, quis posuere justo dignissim non. Nam in lectus sed est lacinia elementum. Nunc ut tempus ligula, id gravida metus. Curabitur et lacus finibus, sodales libero sed, consequat felis. Morbi porttitor lacinia aliquam. Aenean eget dictum dui. Suspendisse cursus nunc at ligula elementum, at vehicula nibh finibus. Maecenas consectetur placerat pharetra. Suspendisse pulvinar massa eros, vitae congue felis vehicula sed. Donec venenatis iaculis turpis at bibendum. Vivamus eget sem nec lorem tempus ullamcorper. Maecenas maximus felis et ex feugiat pellentesque. In quis felis est. Donec id quam ac dui ornare facilisis. Fusce ipsum justo, congue id convallis eget, ullamcorper sit amet est. Sed sit amet tristique ante."
          }
        },
        {
          "type" : "delimiter",
          "data" : {}
        },
        {
          "type" : "paragraph",
          "data" : {
              "text" : "Aliquam quis ipsum eget purus tincidunt venenatis vitae in nunc. Aliquam pellentesque placerat varius. Maecenas molestie nisl gravida lobortis imperdiet. Quisque pretium, tortor et molestie laoreet, tellus urna blandit metus, non malesuada ipsum magna ac ex. Phasellus nec faucibus velit, vel sollicitudin sem. Nam vulputate nec leo vitae facilisis. Aenean eget eleifend lectus, mattis interdum purus. Mauris ut sodales massa. Proin sed tempus dolor, sed bibendum lorem. Praesent id scelerisque elit, vestibulum elementum orci. Quisque diam erat, cursus sed risus fringilla, pulvinar placerat ipsum. Morbi luctus nisi ut mattis elementum. Integer nec luctus ligula. Duis euismod laoreet nisl pellentesque accumsan. Nulla pharetra, erat eu eleifend gravida, ex augue tincidunt ex, ut blandit massa ex quis tortor."
          }
        },
      ],
      version: "2.11.10"
    },
  };

  render() {
    return <EditorJs data={ this.state.data } tools={EDITOR_JS_TOOLS} />;
  };
};
