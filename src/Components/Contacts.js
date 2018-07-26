import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'

export default class Contacts extends Component {




  render() {
    return(
      <Consumer>
        {value => {
          const {contacts} = value;
          return (
            <div className="container">
              {contacts.map( contact => <Contact
                removeItem={this.removeItem}
                key={contact.id} 
                {...contact}
              />)}
            </div>
          )
        }}
      </Consumer>
    )
  }
}
