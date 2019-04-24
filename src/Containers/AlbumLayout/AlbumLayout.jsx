import React, { Component } from 'react';
import Album from "../../Components/Album/Album";

class AlbumLayout extends Component{

    state = {
        albums: []
    }

    componentDidMount(){
        fetch(`https://api.vk.com/method/photos.getAlbums?owner_id=${localStorage.getItem('user_id')}&need_covers=1&access_token=${localStorage.getItem('access_token')}&v=5.95`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                albums: json.response.items
            })
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
        return this.state.albums.map(album => <Album name={album.title} col={album.size} time={this.dateAgo(album.updated)} click={this.props.click} imgSrc={album.thumb_src} key={album.id} id={album.id}/>)
    }

    render(){   
        return(
            <ul className="albums">
                {this.albumList()}
            </ul>
        )
    }
}

export default AlbumLayout;
