import React, { Component } from 'react';
import './header.scss';
import Button from "../../Components/Button/Button";

class Header extends Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="search">
                        <Button />
                        <div className="search-input">
                            <input type="text"/>
                            <button>x</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;