//import "./../assets/styles/libs.scss";

import  React  from 'react';
import ReactDOM from 'react-dom';
import store from "./../store/store";
import { Provider } from 'react-redux'
import { addImage } from "./../actions/index";
import { Header } from './../components/header/header.jsx';
import Gallary from './../widgets/gallary/Gallary.jsx';

//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('app'));
window.store = store;
window.addImage = addImage;
ReactDOM.render(<Provider store={store}>
   <div>
        <Header />
        <Gallary/>
    </div>
  </Provider>, document.getElementById('app'));