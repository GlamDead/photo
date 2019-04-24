import React, {Component} from 'react';

class PhotoPrev extends Component{

    nextPage = () =>{
        this.props.click(this.props.id, this.selectPhoto(), "photo")
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
                    <button onClick={this.nextPage}>Select</button>
                </figcaption>
            </figure>
        )
    }
}

export default PhotoPrev;