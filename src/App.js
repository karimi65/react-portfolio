import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './pages/home/Home'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
