//import "./../assets/styles/libs.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import store from "./../store/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { addImage } from "./../actions/index";
import { Header } from './../components/header/header.jsx';
import Gallary from './../widgets/gallary/Gallary.jsx';
import Details from './../widgets/details/Details.jsx';

//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('app'));
window.store = store;
//window.addImage = addImage;
ReactDOM.render(<Provider store={store}>


  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Gallary} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </div>
  </Router>

</Provider>, document.getElementById('app'));