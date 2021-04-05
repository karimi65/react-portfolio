import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Router>


    </div>
  );
}

export default App;
