import React, { Component } from 'react';
import './App.scss';
import Header from "./Containers/Header/Header"
import Layout from "./Containers/Layout/Layout";
import AppLayout from "./Containers/AppLayout/AppLayout";
import Pages from "./Components/Pages/Pages";

const appPhoto = <Layout>
                    <AppLayout>
                      <Pages type="album" cheсked="true"/>
                      <Pages type="upload"/>
                    </AppLayout>
                  </Layout>;

const signIn = <div className="container">
                  <p className="sign-in">Войдите в аккаунт Вконтакте</p>
                </div>

class App extends Component {

  state = {
    isOpen: false
  }

  componentDidMount(){
    if(localStorage.getItem("access_token") !== null){
      this.setState({
        isOpen: true
      })
    }
  }

  render(){
    const app = this.state.isOpen ?  appPhoto : signIn
    return(
      <React.Fragment>
        <Header />
        {app}
      </React.Fragment>
    )
  }
}

export default App;
