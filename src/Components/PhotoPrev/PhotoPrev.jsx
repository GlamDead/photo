import React, {Component} from 'react';
import { changePhoto } from '../../Store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
    return {
        photo: bindActionCreators(changePhoto, dispatch)
    }
}

class PhotoPrev extends Component{
    
    clickPhoto = () => {
        this.props.photo(this.selectPhoto())
        this.props.click()
    }

    selectPhoto(){
        let photo;
        const containerWidth = document.querySelector('.container').getBoundingClientRect().width;
        switch(true){
            case (containerWidth > 768):
                photo = this.props.img[3].url
                break;
            case containerWidth > 425:
                photo = this.props.img[7].url
                break;
            case containerWidth > 350:
                photo = this.props.img[6].url
                break;
            default:
                photo = this.props.img[5].url
                break;

        }
        return photo;
    }

    render(){
        return(
            <figure className="photoPrev">
                <img src={this.props.imgSrc} alt="" />
                <figcaption>
                    <i className="fas fa-check"></i>
                    <button onClick={this.clickPhoto}>Select</button>
                </figcaption>
            </figure>
        )
    }
}


export default connect(null, mapDispatchToProps)(PhotoPrev)