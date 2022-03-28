import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import { extendTheme } from "@chakra-ui/react"


import { BrowserRouter as Router } from "react-router-dom";

import './fonts/sf-ui-display-bold.woff'; 



const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily:"SF-Medium"
      }}}

})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
          <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
