import React, {Component} from 'react';
import PhotoPrev from '../../Components/PhotoPrev/PhotoPrev';
import Tooltip from '../../Components/Tooltip/Tooltip';

const per = {
    containerWidth: 0,
    containerHeight: 0,
    countColumn: 0,
    countRow: 0
}

class Photos extends Component{

    state = {
        photos: [],
        showPhotos: [],
        loadingState: false
    }

    componentWillMount(){
        fetch(`https://api.vk.com/method/photos.get?owner_id=${localStorage.getItem('user_id')}&album_id=${localStorage.getItem('album_id')}&access_token=${localStorage.getItem('access_token')}&v=5.95`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                photos: json.response.items
            })
        })
    }

    componentDidMount(){
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight){
                this.loadMorePhoto()
            }
        })
    }
     
    componentDidUpdate(prevProps, prevState) {
        if(this.state.photos !== prevState.photos){
            this.photosList(0, this.numberPhoto())
        }
        
    }

    photosList(start, stop){
        let array = this.state.showPhotos;
        for(let i = start; i < stop; i++){
            if(this.state.photos[i] !== undefined){
                array.push(<Tooltip key={this.state.photos[i].id} name={this.state.photos[i].sizes[2].url}><PhotoPrev click={this.props.click} imgSrc={this.state.photos[i].sizes[2].url} id={this.state.photos[i].id} img={this.state.photos[i].sizes}/></Tooltip>)
            }
            else{
                break;
            }
        }
        this.setState({
            showPhotos: array
        })   
    }

    numberPhoto(){
        per.containerWidth = document.querySelector('.photo-container').getBoundingClientRect().width;
        per.containerHeight = window.innerHeight - 200;
        per.countColumn = parseInt(per.containerWidth/160);
        per.countRow = parseInt(per.containerHeight/210);
        return per.countColumn * per.countRow
    }
     
     
    loadMorePhoto() {
        if(this.state.loadingState){
            return;
        }
        this.setState({ loadingState: true });
        setTimeout(() => {
            const lenght = this.state.showPhotos.length;
            this.photosList(lenght, lenght + per.countColumn)
            this.setState({ loadingState: false });
        }, 1000);
       }
     
    render() {
        const load = this.state.loadingState ? <p className="loading"> loading More Photos..</p> : "";
        const heightConatiner = window.innerHeight - 200;
        return (
            <React.Fragment>
            <div ref="iScroll" style={{ height: heightConatiner }}  className="photo-container">
                <div className="photos">
                    {this.state.showPhotos}
                </div>
           </div>
           {load}
           </React.Fragment>
        )
    }
}

export default Photos;