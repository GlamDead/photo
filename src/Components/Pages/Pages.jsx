import React, { Component } from 'react';
import Item from '../../Containers/Item/Item';

class Pages extends Component{

    state = {
        page: 0,
        nameAlbum: "",
        namePhoto: ""
    }


    nextPage = (id, name, type) => {
        if(type === "album"){
            if(id !== null && id !== undefined && id !== ""){
                localStorage.setItem('album_id', id)
            }
            this.setState({
                page: this.state.page + 1,
                nameAlbum: name 
            })
        }
        else{
            this.setState({
                page: this.state.page + 1,
                namePhoto: name
            })
        }
    };

    prevPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }

    page(){
        let selectPage;
        if(this.props.type === "upload"){
            selectPage = this.props.type
        }
        else{
            switch(this.state.page){
                case 0:
                    selectPage = this.props.type
                    break;
                case 1:
                    selectPage = "photos"
                    break;
                case 2:
                selectPage = "photo"
                    break;
                default:
                selectPage = ""
                    break
            }
        }
        return selectPage
    }


    icons(){
        let icon;
        switch(this.props.type){
            case "album":
                icon = <i className='far fa-image'></i>;
                break;
            case "upload":
                icon = <i className="fas fa-upload"></i>;
                break;
            default:
                icon = <p>Нет иконки</p>;
                break;
        }
        return icon;
    }

    render(){
        const type = this.page();
        const icon = this.icons();
        const input = (this.props.cheсked === "true") ? <input type="radio" name="tab" id={this.props.type} defaultChecked /> : <input type="radio" name="tab" id={this.props.type}/>;
        return(
            <React.Fragment>
                {input}
                <label htmlFor={this.props.type} className="tab">
                    {icon}
                </label>
                <Item page={type} clickNext={this.nextPage} clickPrev={this.prevPage} id={this.state.id} albumName={this.state.nameAlbum} photoName={this.state.namePhoto}/>
            </React.Fragment>       
        )
    }
}

export default Pages;