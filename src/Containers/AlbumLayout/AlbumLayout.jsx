import React, { Component } from 'react';
import Album from "../../Components/Album/Album";
import { Preloader, Placeholder } from 'react-preloading-screen';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { plusPage, changeAlbumList } from '../../Store/actions';

const mapStateToProps = (state) => {
    return{
        proxy: state.proxyUrl,
        albums: state.albums,
        token: state.accessToken,
        userId: state.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plus: bindActionCreators(plusPage, dispatch),
        addAlbums: bindActionCreators(changeAlbumList, dispatch)
    }
}


class AlbumLayout extends Component{

    componentDidMount(){
        const url = `https://api.vk.com/method/photos.getAlbums?owner_id=${this.props.userId}&need_covers=1&access_token=${this.props.token}&v=5.95`
        fetch(this.props.proxy + url)
        .then(res => res.json())
        .then(json => {
            this.props.addAlbums(json.response.items)
        })
    }

    dateAgo(date){
        let dateLastUpdate = new Date(date * 1000);
        const miliseconds = Date.now() - Date.parse(dateLastUpdate)
        const minute = parseInt(miliseconds / 60000)
        if(minute > 59){
            const hours = parseInt(miliseconds / 3600000)
            return `${hours} hours`
        }
        else{
            return `${minute} minutes`;
        }
    }

    albumList(){
        return this.props.albums.map(album => <Album name={album.title} col={album.size} time={this.dateAgo(album.updated)} click={this.props.plus} imgSrc={album.thumb_src} key={album.id} id={album.id}/>)
    }

    render(){   
        return(
            <Preloader>
                <ul className="albums">
                    {this.albumList()}
                </ul>
                <Placeholder>
                    <span>Loading...</span>
                </Placeholder>
            </Preloader>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumLayout);
