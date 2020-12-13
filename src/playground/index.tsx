import React from 'react';
import ReactDOM from 'react-dom';
import { TypingEffect } from '../TypingEffect';
ReactDOM.render(
  <TypingEffect texts={["This is a typewriter effect.", "Using react and simple css"]} />,
  document.getElementById('root'),
);
