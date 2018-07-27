import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Consumer} from '../../context'

export default class Contact extends Component {
  state = {
    toggle: false
  }

  toggleHandler = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  removeHandler = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }

  render() {
    const {name, email, phone, id} = this.props;
    const {toggle} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name}
                <i className="fas fa-sort-down" onClick={this.toggleHandler}></i>
                <i
                  className="fas fa-times"
                  style={{
                  float: "right",
                  cursor: "pointer",
                  color: "red"
                }}
                  onClick={this
                  .removeHandler
                  .bind(this, id, dispatch)}></i>
              </h4>
              {toggle && <ul className="list-group">
                <li className="list-group-item">email: {email}</li>
                <li className="list-group-item">phone number: {phone}</li>
              </ul>}
            </div>
          )
        }}

      </Consumer>
    )
  }
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}