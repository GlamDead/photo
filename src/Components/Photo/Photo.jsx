import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        photo: state.photo
    }
}

class Photo extends Component{
    
    render(){
        return(
            <figure className="photo">
                <img src={this.props.photo} alt="" />
                <figcaption>
                    <ul>
                        <li><h3>File name:</h3><span>{this.props.photo.substring(23)}</span></li>
                    </ul>
                </figcaption>
            </figure>
        )
    }
}


export default connect(mapStateToProps)(Photo);