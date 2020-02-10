// import React from 'react';
import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import  './style.css'
// import App from './App';

const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <div>
                <Header className='header'>Header</Header>
                <Content className='content'>Content</Content>
                <Footer>Footer</Footer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

