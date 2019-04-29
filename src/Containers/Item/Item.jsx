import React, { Component } from 'react';
import NameBar from '../../Components/NameBar/NameBar';
import AlbumLayout from '../AlbumLayout/AlbumLayout';
import Upload from '../../Components/Upload/Upload';
import PhotoLayout from '../PhotoLayout/PhotoLayout';
import Photo from '../../Components/Photo/Photo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}


class Item extends Component{

    componentView(){
        let compon;
        if (this.props.type === "upload"){
            compon = <Upload />;
        }
        else{
            switch(this.props.page){
                case 0:
                    compon = <AlbumLayout />;
                    break;
                case 1:
                    compon = <PhotoLayout />;
                    break;
                case 2:
                    compon = <Photo />;
                    break;
                default:
                    compon = "";
                    break;
            }
        }
        return compon;
    }

    render(){
        const compon = this.componentView();
        return(
            <div className="item">
                <NameBar />
                {compon}
            </div>
        )
    }
}


export default connect(mapStateToProps)(Item);