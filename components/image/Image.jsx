import React from 'react';
import {Link } from "react-router-dom";


class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    createImage() {
        return this.props.images.map((image) => {
            return <li className="image-list" id={image.id} key={image.id}>
                <div>
                <Link to={`/details/${image.id}`} >
                    <h3>{image.name}</h3>
                    <img src={image.path} />                
               </Link>
               </div>
            </li>
        })
    }
    render() {
        console.log(this.props.images)

        return (
            <div className="image-static-component">
                <ul>
                    {this.createImage()}
                </ul>
            </div>
        );
    }
}
export default Image;