import React, { Component } from 'react';
import Item from '../../Containers/Item/Item';

class Pages extends Component{

    page(){
        let selectPage = "";
        if(this.props.type === "upload"){
            selectPage = this.props.type
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
                <Item type={type} />
            </React.Fragment>       
        )
    }
}

export default Pages;