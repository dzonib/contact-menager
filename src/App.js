import React, {Component} from 'react';
import Header from './Components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './Components/contacts/Contacts';
import {Provider} from './context'
import AddContact from './Components/contacts/AddContact';

export default class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Menager"/>
          <div className="container">
            <AddContact/>
            <Contacts/>
          </div>
        </div>
      </Provider>
    );
  }
}
