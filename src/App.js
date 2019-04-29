import React, { Component } from 'react';
import './App.scss';
import Header from "./Containers/Header/Header"
import Layout from "./Containers/Layout/Layout";
import AppLayout from "./Containers/AppLayout/AppLayout";
import Pages from "./Components/Pages/Pages";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isOpen: state.buttonIsClick
  }
}

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


  render(){
    const app = this.props.isOpen ?  appPhoto : signIn
    return(
      <React.Fragment>
        <Header />
        {app}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(App)