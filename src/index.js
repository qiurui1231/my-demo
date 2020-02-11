// import React from 'react';
import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import  './style.css';
import AppHeader from './components/header/';
import List from './container/List/';
import Detail from './container/Detail/';
// import App from './App';

const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Layout style={{minWidth:1300}}>
                <Header className='header'><AppHeader /></Header>
                <Content className='content'>
                   
                        <Switch>
                        <Route path='/detail/:id' component={Detail} />
                        <Route path='/:id?' component={List} />
                        </Switch>
                    
                </Content>
                <Footer  className='footer'>Footer</Footer>
            </Layout>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

