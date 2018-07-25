import React, { Component } from 'react';
import Contact from './Components/Contact';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

  state = {
    contacts: [
      {id: 1, name: "John Doe", email: "johndoe@gmail.com", phone: "225993"},
      {id: 2, name: "Kong", email: "kingkong@gmail.com", phone: "568566369"},
      {id: 3, name: "King", email: "kingkong@gmail.com", phone: "5898745454"},
    ]
  }

  removeItem = id => {
    let updatedContacts = this.state.contacts.filter(item => item.id !== id)
    console.log(updatedContacts)
    this.setState(() => ({
      contacts: updatedContacts
    }))
  }

  render() {
    const {contacts} = this.state;

    return (
      <div className="App">
        <Header branding="Contact Menager"/>
        <div className="container">
          {contacts.map( contact => <Contact
          removeItem={this.removeItem}
          key={contact.id} 
          {...contact}
           />)}
        </div>
      </div>
    );
  }
}

