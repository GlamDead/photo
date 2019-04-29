import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNameUser, changeTextNameBar, changeNameAlbum, minusPage } from '../../Store/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        token: state.accessToken,
        id: state.userId,
        proxy: state.proxyUrl,
        album: state.nameAlbum,
        text: state.textNameBar,
        name: state.nameUser,
        page: state.page,
        photo: state.photo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAlbum: bindActionCreators(changeNameAlbum, dispatch),
        changeText: bindActionCreators(changeTextNameBar, dispatch),
        changeUser: bindActionCreators(changeNameUser, dispatch),
        minus: bindActionCreators(minusPage, dispatch)
    }
}


class NameBar extends Component{

    updateState(){
        switch(this.props.page){
            case 0:
                this.nameUser();
                break;
            case 1:
                this.props.changeText(this.props.album)
                break;
            case 2:
                this.props.changeText(this.props.photo.substring(23))
                break;
            default:
                break;
        } 
    }

    componentDidMount(){
        this.updateState();
    }

    componentDidUpdate(prevProps){
        if(this.props.page !== prevProps.page){
            this.updateState()
        }
    }


    nameUser(){
        if(this.props.name === "user"){
            const url = `https://api.vk.com/method/users.get?user_ids=${this.props.id}&fields=bdate&access_token=${this.props.token}&v=5.95`;
            fetch(this.props.proxy + url)
            .then(res => res.json())
            .then(json => {
                this.props.changeUser(json.response[0].first_name)
                this.props.changeText(`Welcome, ${json.response[0].first_name}`)
            })
        }
        else{
            this.props.changeText(`Welcome, ${this.props.name}`)
        }
    }

    typePage(){
        let compon;
        switch(this.props.page){
            case 1:
                compon = <React.Fragment><i className="fas fa-chevron-left" onClick={this.props.minus}></i><i className="fas fa-folder"></i></React.Fragment>;
                break;
            case 2:
                compon = <i className="fas fa-chevron-left" onClick={this.props.minus}></i>;
                break;
            default:
                compon = "";
                break;
        }
        return compon;
    }

    render(){
        const view = this.typePage();
        return(
            <p className="item-welcome">
                {view}
                <span className="item-welcome-namealbum">{this.props.text}</span>
            </p>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameBar);