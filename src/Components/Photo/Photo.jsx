import React, {Component} from 'react';

class Photo extends Component{
    render(){
        return(
            <figure className="photo">
                <img src={this.props.img} alt="" />
                <figcaption>
                    <ul>
                        <li><h3>File name:</h3><span>{this.props.img.substring(23)}</span></li>
                    </ul>
                </figcaption>
            </figure>
        )
    }
}

export default Photo;