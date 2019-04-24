import React, { Component } from 'react';



class Album extends Component{

    clickAlbum = () => {
        this.props.click(this.props.id, this.props.name, "album");
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

export default Album;