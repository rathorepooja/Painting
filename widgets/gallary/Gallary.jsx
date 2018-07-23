import React from 'react';
import Image from './../../components/image/Image.jsx';
import { addImage } from './../../actions/index.js';
import { connect } from 'react-redux';
import  MultiSelectReact  from 'multi-select-react';
class Gallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      title: "This is my Gallery"
    };
  }
  selectedOptionsClick(optionsList, id) {
   console.log(optionsList)
  }
  optionClicked(optionsList) {
    console.log(optionsList);
    this.setState({ images: optionsList });
  }
  componentDidMount(){    
     
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
            <div>            
              <h1 className="small-padding">{this.state.title}</h1>
              <div className="header-funtion">
                <div className="filter">
                  <MultiSelectReact options={this.props.images}
                  optionClicked={this.optionClicked.bind(this)}
                  selectedBadgeClicked={this.selectedOptionsClick.bind(this)}/>
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
