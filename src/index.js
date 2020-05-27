import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SearchMovies from "./components/searchMovies";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SearchMovies />
  </React.StrictMode>,
  document.getElementById('root')
);
