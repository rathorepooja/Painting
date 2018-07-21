import React from 'react';


class Image extends React.Component {
    constructor(props) {
        super(props);  
        
    }
    createImage() {
        return this.props.images.map((image) => {
            return <li key={image.id}>{image.name}</li>
         })
    }
    render() {
    console.log(this.props.images)
      
       return (
          <div>
             {this.createImage()}
          </div>
       );
    }
 }
 export default Image;