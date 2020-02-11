import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import logo from './logo.png';
import './style.css';
import  axios from 'axios';
import Item from 'antd/lib/list/Item';

class AppHeader extends Component {
    constructor(props){
        super(props)
        this.state={list:[]}
    }
    getMenuItem(){
        return  this.state.list.map(item =>{
            return  (<Menu.Item key={item.id}>
                <Link to={`/${item.id}`}>
                <Icon type={item.icon} />
                {item.title}
                </Link>
            </Menu.Item>)
        })
    }
    componentDidMount(){
        const Promise = axios.get('http://www.dell-lee.com/react/api/header.json')
        Promise.then(res=>{
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        return (
            <Fragment>
                <img src={logo} className='app-header-logo' />
                <Menu mode="horizontal" className='app-header-menu'>
                    
                    {this.getMenuItem()}
                </Menu>
            </Fragment>
        )
    }
}

export default AppHeader;