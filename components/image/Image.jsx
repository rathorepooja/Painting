import React from 'react';


class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    createImage() {
        return this.props.images.map((image) => {
            return <li className="image-list" key={image.id}>
                <div>
                    <h3>{image.name}</h3>
                    <img src={image.path} />
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