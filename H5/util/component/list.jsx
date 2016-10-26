import React , { Component } from 'react';

export default class List extends Component{
    static defaultProps = {
        title:'',
        moreTitle:'',
        listData:[]
    };
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="list-box">
                <div className="title-box">
                    <div className="tit">{this.props.title}</div>
                    <div className="more">{this.props.moreTitle}</div>
                </div>
                {
                    this.props.listData.map((d) =>
                        <a href={d.url} className="con-box clearfix bor-bottom">
                            <img src={d.imgUrl} alt="" className="con-img"/>
                            <div className="con-lab">{d.title}</div>
                        </a>
                    )
                }
            </div>
        )
    }
}