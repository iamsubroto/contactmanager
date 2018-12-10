import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './component/contacts/Contacts';
import Header from "./component/layout/Header";
import AddContact from "./component/contacts/AddContact";
import EditContact from "./component/contacts/EditContact";
import About from "./component//Pages/About";

import {Provider} from './context';
import "./App.css"; 
import NotFound from "./component/Pages/NotFound";
import Test from "./component/Test";






class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
              <div className="container">
              {/* <AddContact />
              <Contacts /> */}
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/addContact" component={AddContact} />                  
                  <Route exact path="/contact/edit/:id" component={EditContact} />                  
                  <Route exact path="/about" component={About} />
                  <Route exact path="/test" component={Test} />                  
                  <Route component={NotFound} />
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
