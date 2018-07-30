import React, { Component } from 'react';
import Header from './Components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/contacts/Contacts';
import { Provider } from './context';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Menager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route path="/contact/add" component={AddContact} />
                <Route path="/contact/edit/:id" component={EditContact} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
