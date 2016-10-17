import './home.less';
import React , { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {NavBar} from 'antd-mobile';
import Mock from 'mockjs';

import homeRs from './reducer';

import Active from '../../../util/js/active';

let Random = Mock.Random;
const data = Mock.mock({
    "list|5":[{
        "url":"@url",
        "imgUrl":Random.image('200x100','@color')
    }]
});

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div className="home-box">
                <NavBar iconName="" mode="light">首页</NavBar>

                <Active data={data} />

                <h2><Link to='/home/detail/1'> 点击进入的详情页面</Link></h2>
            </div>
        )
    }
}

export default Index;