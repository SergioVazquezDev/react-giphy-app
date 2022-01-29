import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpertApp } from './GifExpertApp';

import './index.css';

ReactDOM.render(
  // <React.StrictMode> hará que React sea más estricto, como estamos aprendiendo lo quitamos de momento
  <GifExpertApp />,
  document.getElementById('root')
);

