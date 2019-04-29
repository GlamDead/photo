import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNameAlbum, changeIdAlbum, changeShowPhotos } from '../../Store/actions';
import { bindActionCreators } from 'redux';


const mapDispathToProps = (dispatch) => {
    return {
        albumName: bindActionCreators(changeNameAlbum, dispatch),
        albumId: bindActionCreators(changeIdAlbum, dispatch),
        photos: bindActionCreators(changeShowPhotos, dispatch)
    }
}

class Album extends Component{

    clickAlbum = () => {
        this.props.photos([])
        this.props.albumName(this.props.name)
        this.props.albumId(this.props.id)
        this.props.click();
    }

    render(){
        return(
            <li className="album" onClick={this.clickAlbum}>
                <img src={this.props.imgSrc} alt="" />
                <div className="album-desc">
                    <h2>{this.props.name}</h2>
                    <p><i className="fas fa-save"></i> {this.props.col} files</p>
                    <p><i className="far fa-clock"></i> {this.props.time} ago</p>
                </div>
                <button>
                    <i className="fas fa-angle-double-right"></i>
                </button>
            </li>
        )
    }
}

export default connect(null, mapDispathToProps)(Album)