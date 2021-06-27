// adding a commit to verify the revert functionality
import React from 'react';

import { connect } from 'react-redux';
import { emptyImages, addImage } from './../../actions/index.js';
import { Panel, ListGroup, Alert, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";

const SubView = (data) => (
  <div>
     <Panel bsStyle="info" >
          <Panel.Heading>
            <Panel.Title componentClass="h3"><b>Artist : {data.image.author}</b></Panel.Title>
          </Panel.Heading>
          <Panel.Body>ALL description about image : {data.image.description}</Panel.Body>
      </Panel>
  </div>
);


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    if (this.props.images && this.props.images.length == 0) {
      this.setImages();
    } else {
      this.state.selectedImage = this.props.images.filter(a => a.id == this.props.match.params.id)[0]
    }

  }

  addToCart() {
    //adding to cart called
    console.log('Add to cart called');
  }
  buyNow() {
    //buy Now 
    console.log('Buy Now called');
  }
  setImages() {

    //this.props.emptyImages();
    fetch('../../../store/images.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.props.addImages(result.images);
          this.setState({
            loaded: true,
            selectedImage: this.props.images.filter((a) => a.id == this.props.match.params.id)[0]
          });
        },
        (error) => {
          this.setState({
            loaded: true,
            error: "There is some error",
          });
        }
      )

  }
  render() {
    if (!this.state.selectedImage) {
      return <div> No image</div>;
    }
    return (


     
      <div className='container details'>
      
        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3"><b>{this.state.selectedImage.name}</b></Panel.Title>
          </Panel.Heading>
          <Panel.Body>ALL description below</Panel.Body>
          <ListGroup>
            <ListGroupItem><img className="detailImage" src={`../../../${this.state.selectedImage.path}`} /> </ListGroupItem>

            <ListGroupItem> {this.state.selectedImage.sellable ? <Alert bsStyle="warning">
              <strong>Sorry!</strong>Currently this item is not for sale
                       </Alert> : `Price: ${this.state.selectedImage.price}`} </ListGroupItem>

            <ListGroupItem>Artist: {this.state.selectedImage.author} 
              <Link to={`${this.props.match.url}/moreInfo/${this.state.selectedImage.author}`}> Show more info</Link>
            </ListGroupItem>
            <ListGroupItem>Date Created :{this.state.selectedImage['creation-date']}</ListGroupItem>
            <ListGroupItem>Status: {this.state.selectedImage.status}</ListGroupItem>
          </ListGroup>
          <Panel.Body>
            <ButtonToolbar>            
              <Button bsStyle="warning"  > <Link to='/'> back</Link></Button>
              
              {this.state.selectedImage.status != 'sold' &&
                <div className="btn-toolbar"> 
                  <Button bsStyle="info" onClick={this.addToCart}>Add To Cart</Button>
                  <Button bsStyle="success" onClick={this.buyNow}>Buy Now</Button>
                </div>
              }
              
            </ButtonToolbar>
          </Panel.Body>
        </Panel>
        <Route exact  path={`${this.props.match.url}/moreInfo/:author`} component={()=><SubView image={this.state.selectedImage}/>}/>
        
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    images: state['images']
  }
}
const mapDispatchToProps = dispatch => {
  return {
    emptyImages: () => {
      dispatch(emptyImages())
    },
    addImages: (data) => {
      dispatch(addImage(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
