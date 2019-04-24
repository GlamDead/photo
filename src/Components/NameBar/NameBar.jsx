import React, { Component } from 'react';



class NameBar extends Component{

    state = {
        nameAlbum: "album",
        text: "",
        name: "user"
    }

    updateState(){
        switch(this.props.page){
            case 'album':
                this.nameUser();
                break;
            case 'photos':
                if(this.props.albumName === undefined){
                    this.setState({
                        text: this.state.nameAlbum
                    })
                }
                else{
                    this.setState({
                        nameAlbum: this.props.albumName,
                        text: this.props.albumName
                    })
                }
                break;
            case 'photo':
                this.setState({
                    text: this.props.photoName.substring(23)
                })
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
        if(this.state.name === "user"){
            fetch(`https://api.vk.com/method/users.get?user_ids=${localStorage.getItem('user_id')}&fields=bdate&access_token=${localStorage.getItem("access_token")}&v=5.95`, 
            {
                mode: 'cors',
                headers: {
                  'Access-Control-Allow-Origin':'*'
                }
              })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    name: json.response[0].first_name,
                    text: `Welcome, ${json.response[0].first_name}`
                })
            })
        }
        else{
            this.setState({
                text: `Welcome, ${this.state.name}`
            })
        }
    }


    prevPage = () =>{
        this.props.click()
    }


    typePage(){
        let compon;
        switch(this.props.page){
            case 'photos':
                compon = <React.Fragment><i className="fas fa-chevron-left" onClick={this.prevPage}></i><i className="fas fa-folder"></i></React.Fragment>;
                break;
            case 'photo':
                compon = <i className="fas fa-chevron-left" onClick={this.prevPage}></i>;
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
                <span className="item-welcome-namealbum">{this.state.text}</span>
            </p>
        )
    }
}

export default NameBar;