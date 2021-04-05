import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/portfolio">
                <button>Portfolio</button>
            </Link>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </div>
    )
}

export default Navbar
