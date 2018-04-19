import * as React from "react"
import { Link } from "react-router"

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

const Header = () => (
  <header>
    <nav>
      <div className="nav-container">
        <ul>
          <li><Link to='/'>Work</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;