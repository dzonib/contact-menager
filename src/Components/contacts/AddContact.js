import React, {Component} from 'react';
import {Consumer} from '../../context'
import uuid from 'uuid'

export default class AddContact extends Component {

  state = {
    name: "",
    email: "",
    phone: ""
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const {name, email, phone} = this.state;

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: uuid(),
        name,
        email,
        phone
      }
    })

    this.setState({name: '', email: '', phone: ''})

    this.props.history.push('/')
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {name, email, phone} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form
                  onSubmit={this
                  .onSubmit
                  .bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={this.onChangeHandler}
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={this.onChangeHandler}
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="phone"
                      value={phone}
                      onChange={this.onChangeHandler}
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."/>
                  </div>
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}