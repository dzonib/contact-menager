import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Contact extends Component {
  state = {
    toggle: false
  }

  toggleHandler = e => {
    e.preventDefault();
    this.setState({toggle: !this.state.toggle})
  }

  removeHandler = (id) => {
    this.props.removeItem(id)
  }

  render() {
  const {name, email, phone, id} = this.props;
  const {toggle} = this.state;
      return (
        <div className="card card-body mb-3" >
          <h4 onClick={() => this.removeHandler(id)}>{name} 
            <i className="fas fa-sort-down" onClick={this.toggleHandler}></i>
          </h4>
          {toggle && <ul className="list-group">
            <li className="list-group-item">email: {email}</li>
            <li className="list-group-item">phone number: {phone}</li>
          </ul>}
        </div>
      )
    }
  }
  Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}
