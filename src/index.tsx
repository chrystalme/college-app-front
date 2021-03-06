import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './components/Routers';

ReactDOM.render(
  <Routers/>,
  document.getElementById('root')
);
