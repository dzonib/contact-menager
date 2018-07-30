import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <h3>
    <span className="text-danger">404</span> - Page Not Found! <Link to="/">Return to homepage</Link>
  </h3>
)

export default NotFound