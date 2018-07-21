import React from 'react';
import Image from './../../components/image/Image.jsx';
import { addImage } from './../../actions/index.js'
import { connect } from 'react-redux'

//import json from "./mock.json"; 

class Gallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "This is my Gallery"
    };
  }
  componentDidMount(){    
      let data = [
          {
            "name": "first Photo did mount",
            "year": 2015,
            "creation-date": "15/05/2015",
            "status": "sold",
            "category": "",
            "price": 20,
            "currency":"",
            "sellable": true,
            "author": "Pooja dddd",
            "id":1
        }
        ];
      this.props.addImages(data);
  }
    render() {
     console.log(this.props);
       return (
          <div>
             <h1>{this.state.title}</h1>
               <Image images={this.props.images}/> 
          </div>    
       );
    }
 }
 const mapStateToProps = state => { 
  return {   
    images: state['images']
  }
}
const mapDispatchToProps = dispatch  => {
  return {
    addImages: (data) => {
      dispatch(addImage(data));
    }
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallary)

 //export default Gallary;
