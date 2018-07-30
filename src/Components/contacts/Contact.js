import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Consumer} from '../../context'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Contact extends Component {
  state = {
    toggle: false
  }

  toggleHandler = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  removeHandler = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({type: 'DELETE_CONTACT', payload: id})
    } catch(e) {
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
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
                  <Link to={`contact/edit/${id}`}>
                    <i className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}></i>
                  </Link>
              </h4>
              {toggle && <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone number: {phone}</li>
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