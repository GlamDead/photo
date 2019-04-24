import React, {Component} from "react";

const path = `${window.location.protocol}//${window.location.host}`

class Button extends Component{

    state = {
        isClick: false
    }

    componentDidMount(){
        if(localStorage.getItem('user_id') !== null){
            this.setState({
                isClick: !this.state.isClick
            })
        }
        const token = new URLSearchParams(window.location.href).get(`${path}/#access_token`)
        if(token !== null){
            const userId = new URLSearchParams(window.location.href).get("user_id")
            this.setState({
                isClick: !this.state.isClick
            })
            localStorage.setItem('access_token', token);
            localStorage.setItem('user_id', userId)
        }
    }

    click = () => {
        if(this.state.isClick === false){
            window.location.href = `https://oauth.vk.com/authorize?client_id=6937462&display=page&redirect_uri=${path}&scope=offline,photos&response_type=token&v=5.95&state=123456&revoke=1`
        }
        else{
            localStorage.clear()
            window.location.href = path
        }
    }

    render(){
        const text = this.state.isClick ? 'Sign out' : 'Sign in'
        return(
            <button className="vk" onClick={this.click}>
                {text}
            </button>
        )
    }
}

export default Button;