//import "./../assets/styles/libs.scss";

import  React  from 'react';
import ReactDOM from 'react-dom';
import { Header } from './../components/header/header.jsx';
import { Gallary } from './../widgets/gallary/Gallary.jsx';

//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(<div>
    <Header />
    <Gallary/>
    </div>, document.getElementById('app'));