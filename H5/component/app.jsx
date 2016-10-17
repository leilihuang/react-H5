import React , { Component } from 'react';
import {TabBar , Icon} from 'antd-mobile';
import {Link , browserHistory} from 'react-router';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state  = {
            hide:false,
            tabCur:""
        };
    }
    render(){
        return (
            <div>
                <div>{this.props.children}</div>
                <TabBar hidden={this.state.hide}>
                        <TabBar.Item title="生活"
                                     key="生活"
                                     icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                                     selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                                     selected={this.state.selectedTab  == "blueTab"}
                                     onPress={()=>{
                                     browserHistory.push('/home');
                                this.setState({
                                    tabCur:"blueTab"
                                })
                        }}></TabBar.Item>
                        <TabBar.Item title="口碑"
                                     key="口碑"
                                     icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                                     selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                                     selected={this.state.selectedTab  == "redTab"}
                                     onPress={()=>{
                                      browserHistory.push('/home/detail/1');
                            this.setState({
                                tabCur:"redTab"
                            })
                        }}></TabBar.Item>
                        <TabBar.Item title="朋友"
                                     key="朋友"
                                     icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                                     selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                                     selected={this.state.selectedTab  == "greenTab"}
                                     onPress={()=>{
                                     browserHistory.push('/home/detail/1');
                        this.setState({
                            tabCur:"greenTab"
                        })
                    }}></TabBar.Item>
                        <TabBar.Item title="我的"
                                     key="我的"
                                     icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                                     selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                                     selected={this.state.selectedTab  == "yellowTab"}
                                     onPress={()=>{
                                     browserHistory.push('/home/detail/1');
                        this.setState({
                            tabCur:"yellowTab"
                        })
                    }}></TabBar.Item>
                </TabBar>
            </div>
        )
    }
}