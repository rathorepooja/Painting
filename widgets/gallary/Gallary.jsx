// adding fourth commit
import React from 'react';
import Image from './../../components/image/Image.jsx';
import { addImage, filterImage, resetImage, emptyImages } from './../../actions/index.js';
import { connect } from 'react-redux';

import Select from 'react-select';
const categoryFilter = [
  {"label": "senic", value: "senic", "type":"category"},
  {"label": "mythological", value: "mythological", "type":"category"},
  {"label": "modern", value: "modern", "type":"category"},
  {"label": "artist: pooja", value: "Pooja", "type":"author"},
  {"label": "artist: abc", value: "abc", "type":"author"},
]
class Gallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      title: "This is my Gallery"      
    };
  }
  
  handleChange(selectedOption){
    if (selectedOption.length > 0) {
      this.props.filterImage(selectedOption.map((a) => a.value));
    } else {
      this.props.resetImages();
    }
  }
  componentDidMount(){  
    if (this.props.allImages && this.props.allImages.length > 0 ) {
        this.props.resetImages();
        this.setState({
          loaded: true
        });
        return;
    }
      this.props.emptyImages();
        fetch('../store/images.json')
          .then(res => res.json())
          .then(
            (result) => {
              this.props.addImages(result.images);
              this.setState({
                loaded: true
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
      const { error, loaded } = this.state;
      if (error) {
        return <div> {error}</div>
      } else if (!loaded) {
        return <div> Loading </div>
      } else {
        return (
            <div className="container">            
              <h1 className="small-padding">{this.state.title}</h1>
              <div className="header-funtion">
                <div className="filter">                  
                  <Select
                    isMulti
                    placeholder="Select the days"
                    onChange={(...args) => this.handleChange(...args)}
                    className="basic-multi-select"
                    classNamePrefix="select"

                    options={categoryFilter}
                    
                  />
                </div>
                <div className="sorting-price"></div>
                <div className="sorting-date"></div>

              </div>
              <div className="image-container">
                <Image images={this.props.images}/>   
              </div>
                
            </div>    
        );
      }
    }
 }
 const mapStateToProps = state => { 
  return {   
    images: state['images'],
    allImages: state['allImages']
  }
}
const mapDispatchToProps = dispatch  => {
  return {
    emptyImages: () => {
      dispatch(emptyImages())
    },
    resetImages: () => {
      dispatch(resetImage());
    },
    addImages: (data) => {
      dispatch(addImage(data));
    },
    filterImage: (data) => {
      dispatch(filterImage(data))
    }
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallary)

 //export default Gallary;
