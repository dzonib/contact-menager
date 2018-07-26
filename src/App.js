import React, { Component } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './Components/Contacts';
import {Provider} from './context'

export default class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Menager"/>
          <Contacts />
        </div>
      </Provider>
    );
  }
}

