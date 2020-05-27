import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './components/Title';
import SearchMovies from "./components/searchMovies";

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <SearchMovies />
  </React.StrictMode>,
  document.getElementById('root')
);
