import React , { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div>
                <h1>欢迎来到详情页面</h1>
                <h2><Link to='/home'>点击返回首页</Link></h2>
            </div>
        )
    }
}


export default Detail;