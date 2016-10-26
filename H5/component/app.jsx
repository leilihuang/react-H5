import React , { Component } from 'react';
import {TabBar , Icon} from 'antd-mobile';
import {Link , browserHistory} from 'react-router';

export default class App extends Component{
    static defaultProps ={
        menus:[
            {to:'/home',title:'首页',iconfont:'icon-shouye iconfont'},
            {to:'/home/detail/1',title:'限时抢购',iconfont:'icon-naozhong-copy iconfont'},
            {to:'/home',title:'特卖专区',iconfont:'icon-icon iconfont'},
            {to:'/home',title:'特卖专区',iconfont:'icon-wode iconfont'}
        ]
    };
    constructor(props){
        super(props);
        this.state  = {
            hide:false,
            tabCur:1
        };
    }
    tabCurBind(index){
        this.setState({
            tabCur:index
        })
    }
    render(){
        return (
            <div className="app-menu-box">
                <div>{this.props.children}</div>
                <div className="menu-flex-box">
                    {this.props.menus.map((d,i) =>
                        <div className={this.state.tabCur == i ? "flexs cur":"flexs"} onClick={this.tabCurBind.bind(this,i)}>
                            <Link to={d.to}>
                                <i className={d.iconfont}></i>
                                <p>首页</p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}