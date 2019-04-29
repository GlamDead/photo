import React, {Component} from 'react';
import PhotoPrev from '../../Components/PhotoPrev/PhotoPrev';
import Tooltip from '../../Components/Tooltip/Tooltip';
import { Preloader, Placeholder } from 'react-preloading-screen';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { changePhotosList, changeShowPhotos, changeLoading, plusPage } from '../../Store/actions';

const mapStateToProps = (state) => {
    return {
        proxy: state.proxyUrl,
        userId: state.userId,
        token: state.accessToken,
        albumId: state.idAlbum,
        photos: state.photos,
        showPhotos: state.showPhotos,
        loadingState: state.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        photosList: bindActionCreators(changePhotosList, dispatch),
        showPhotosList: bindActionCreators(changeShowPhotos, dispatch),
        load: bindActionCreators(changeLoading, dispatch),
        plus: bindActionCreators(plusPage, dispatch)
    }
}

const per = {
    containerWidth: 0,
    containerHeight: 0,
    countColumn: 0,
    countRow: 0
}

class Photos extends Component{

    componentWillMount(){
        const url = `https://api.vk.com/method/photos.get?owner_id=${this.props.userId}&album_id=${this.props.albumId}&access_token=${this.props.token}&v=5.95`;
        fetch(this.props.proxy + url)
        .then(res => res.json())
        .then(json => {
            this.props.photosList(json.response.items)
        })
    }

    componentDidMount(){
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight){
                this.loadMorePhoto()
            }
        })
    }
     
    componentDidUpdate(prevProps) {
        if(this.props.photos !== prevProps.photos){
            this.photosList(0, this.numberPhoto())
            this.forceUpdate()
        }
        
    }



    photosList(start, stop){
        let array = this.props.showPhotos;
        for(let i = start; i < stop; i++){
            if(this.props.photos[i] !== undefined){
                array.push(<Tooltip key={this.props.photos[i].id} name={this.props.photos[i].sizes[2].url}><PhotoPrev click={this.props.plus} imgSrc={this.props.photos[i].sizes[2].url} id={this.props.photos[i].id} img={this.props.photos[i].sizes}/></Tooltip>)
            }
            else{
                break;
            }
        }

        this.props.showPhotosList(array) 
    }

    numberPhoto(){
        per.containerWidth = document.querySelector('.photo-container').getBoundingClientRect().width;
        per.containerHeight = window.innerHeight - 200;
        per.countColumn = parseInt(per.containerWidth/160);
        per.countRow = parseInt(per.containerHeight/210);
        return per.countColumn * per.countRow
    }
     
     
    loadMorePhoto() {
        if(this.props.loadingState){
            return;
        }
        this.props.load(true)
        setTimeout(() => {
            const lenght = this.props.showPhotos.length;
            this.photosList(lenght, lenght + per.countColumn)
            this.props.load(false)
        }, 1000);
       }
     
    render() {
        const load = this.props.loadingState ? <p className="loading"> loading More Photos..</p> : "";
        const heightConatiner = window.innerHeight - 200;
        return (
            <Preloader>
                <React.Fragment>
                <div ref="iScroll" style={{ height: heightConatiner }}  className="photo-container">
                    <div className="photos">
                        {this.props.showPhotos}
                    </div>
                </div>
                {load}
                </React.Fragment>
                <Placeholder>
                    <span>Loading...</span>
                </Placeholder>
           </Preloader>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)