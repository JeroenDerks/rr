import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { ParallaxProvider } from 'react-scroll-parallax';
import Theme from "styles/theme";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>  
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
