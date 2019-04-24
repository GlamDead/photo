import React, { Component } from 'react';
import NameBar from '../../Components/NameBar/NameBar';
import AlbumLayout from '../AlbumLayout/AlbumLayout';
import Upload from '../../Components/Upload/Upload';
import PhotoLayout from '../PhotoLayout/PhotoLayout';
import Photo from '../../Components/Photo/Photo';

class Item extends Component{

    componentView(){
        let compon;
        switch(this.props.page){
            case 'upload':
                compon = <Upload />;
                break;
            case 'album':
                compon = <AlbumLayout click={this.props.clickNext}/>;
                break;
            case 'photos':
                compon = <PhotoLayout click={this.props.clickNext}/>;
                break;
            case 'photo':
                compon = <Photo img={this.props.photoName}/>;
                break;
            default:
                compon = "";
                break;
        }
        return compon;
    }

    render(){
        const compon = this.componentView();
        return(
            <div className="item">
                <NameBar page={this.props.page} click={this.props.clickPrev} albumName={this.props.albumName} photoName={this.props.photoName}/>
                {compon}
            </div>
        )
    }
}

export default Item;