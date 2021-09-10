import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react'
import GlobalStyle from './styles/GlobalStyle'
import Blog from './components/Blog.js';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={css`${GlobalStyle}`} />
    <Blog />
  </React.StrictMode>,
  document.getElementById('root')
);
