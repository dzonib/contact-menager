import React from 'react';
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'


const Header = ({branding}) => {
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">{branding}</a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                <i className="fas fa-home"></i>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                <i className="fas fa-plus"></i>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact/add" className="nav-link">
                <i className="fas fa-question"></i>Add Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

Header.defaultProps = {
  branding: "My App"
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header