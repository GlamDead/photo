import React, {Component} from 'react';

class Tooltip extends Component{
    
    state ={
        opacity: false
    }

    componentDidMount(){
        this.setState({
            name: this.props.name.substring(23)
        })
    }

    toggle = () => {
        this.setState({
            opacity: !this.state.opacity
        })
    }

    render(){
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
        }
        return(
            <div className="tooltip">
                <div onMouseOver={this.toggle} onMouseOut={this.toggle}>
                    {this.props.children}
                </div>
                <div style={style} className="tooltip-text">
                    <h3>File name: </h3>
                    <span>{this.state.name}</span>
                </div>
            </div>
        )
    }
}

export default Tooltip;