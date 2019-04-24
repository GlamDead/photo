import React, { Component } from 'react';

class Layout extends Component{
    render(){
        return(
            <main>
                <div className="container">
                    {this.props.children}
                </div>
            </main>
        )
    }
}

export default Layout;