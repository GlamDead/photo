import React, {Component} from "react";
import { connect } from 'react-redux';
import { changeButton, changeAccessToken, changeUserId } from '../../Store/actions';
import { bindActionCreators } from "redux";


const path = `${window.location.protocol}//${window.location.host}`

const mapStateToProps = (state) => {
    return {
        isClick: state.buttonIsClick
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeButton: bindActionCreators(changeButton, dispatch),
        changeAccessToken: bindActionCreators(changeAccessToken, dispatch),
        changeUserId: bindActionCreators(changeUserId, dispatch)
    }
}

class Button extends Component{

    componentDidMount(){
        if(localStorage.getItem('user_id') !== null){
            this.props.changeButton(!this.props.isClick)
        }
        const token = new URLSearchParams(window.location.href).get(`${path}/#access_token`)
        if(token !== null){
            const userId = new URLSearchParams(window.location.href).get("user_id")
            this.props.changeButton(!this.props.isClick)
            this.props.changeAccessToken(token)
            this.props.changeUserId(userId)
        }
    }

    click = () => {
        if(this.props.isClick === false){
            window.location.href = `https://oauth.vk.com/authorize?client_id=6937462&display=page&redirect_uri=${path}&scope=offline,photos&response_type=token&v=5.95&state=123456&revoke=1`
        }
        else{
            window.location.href = path
        }
    }

    render(){
        const text = this.props.isClick ? 'Sign out' : 'Sign in'
        return(
            <button className="vk" onClick={this.click}>
                {text}
            </button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);