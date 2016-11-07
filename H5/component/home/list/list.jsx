import React , { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getList , initList , loading,add} from './action';

import Loading from '../../common/loading/loading';

@connect(state =>{
    console.log(state)
    return {
        listData:state.homeList.ListApp.data,
        animating:state.homeList.isLoading.animating,
        text:state.homeList.isLoading.text
    }
},dispatch => ({
    getList:(animating) => dispatch(getList(animating))
}))
export default class ListApp extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getList({animating:true,text:'加载中..'});
    }
    componentDidMount(){
    }
    render(){

        return (
            <div>
                <div className="list-box">
                    {
                        this.props.listData.length > 0 ?
                            this.props.listData.map((d,i)=>
                                <a  key={"listId"+i} href='#' className="con-box clearfix bor-bottom">
                                    <img src={d.img} alt="" className="con-img"/>
                                    <div className="con-lab">{d.title}</div>
                                </a>
                        )　: ''
                    }
                </div>
                <Loading />
                {/*<Loading animating={this.props.animating} text={this.props.text} />*/}
            </div>
        )
    }
}
