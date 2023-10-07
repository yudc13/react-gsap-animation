import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import App from './App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
	  overflow: hidden;
	  font-family: -apple-system, BlinkMacSystemFont, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyle/>
		<App/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
