import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        <Link to="/portfolio" className="nav-link" href="../pages/Portfolio.js">Portfolio</Link>
                        <Link to="/resume" className="nav-link" href="#">Resume</Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
