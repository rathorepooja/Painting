import React from 'react';
import Image from './../../components/image/Image.jsx';
//import json from "./mock.json"; 

class Gallary extends React.Component {
    render() {
       return (
          <div>
             <h1>This is my Gallery</h1>
               <Image/> 
          </div>    
       );
    }
 }
 export default Gallary;