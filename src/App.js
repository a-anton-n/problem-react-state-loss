import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Page1 from './pages/Page1';

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/page1' component={Page1} />
    </BrowserRouter>
  );
}

export default App;
