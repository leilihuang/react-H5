import React , { Component } from 'react';
import { RefreshControl, ListView } from 'antd-mobile';

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '相约酒店',
        des: '不是所有的兼职汪都需要风吹日晒'
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '麦当劳邀您过周末',
        des: '不是所有的兼职汪都需要风吹日晒'
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '食惠周',
        des: '不是所有的兼职汪都需要风吹日晒'
    }
];
let pageIndex=0;
const NUM_ROWS = 20;

export default class List extends Component{
    static defaultProps = {
        title:'',
        moreTitle:'',
        listData:[],
        style:{
            height: document.body.clientHeight * 3 / 4,
            overflow: 'auto',
            border: '1px solid #ddd',
            margin: '10px 0'
        }
    };
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        console.log('rednerList',nextProps)
    }
    render(){
        const row = (d,sectionId,rowId) => {
            return (
                <a  key={"listId"+rowId} href={d.url} className="con-box clearfix bor-bottom">
                    <img src={d.imgUrl} alt="" className="con-img"/>
                    <div className="con-lab">{d.title}</div>
                </a>
            )
        };
        return (
            <ListView dataSource={this.props.dataSource}
                      style={this.props.style}
                      renderRow={row}
                      renderHeader={() => <div className="title-box">
                        <div className="tit">{this.props.title}</div><div className="more">{this.props.moreTitle}</div>
                      </div>}
                      renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
                      {this.props.isLoading ? '加载中...' : '加载完毕'}
                        </div>}
                      pageSize={4}
                      className="list-box fortest  clearfix"
                      scrollRenderAheadDistance={500}
                      scrollEventThrottle={20}
                      onScroll={this.props.onScroll}
                      onEndReached = {this.props.onEndReached}
                      useBodyScroll
                      onEndReachedThreshold={0}
                      removeClippedSubviews={true}
/*                      refreshControl={<RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this.onRefresh.bind(this)}
                       />}*/
                />
        );
    }
}

{/**
 separator                       div下面的边线
 className                      定义模块外层的class样式名
 scrollRenderAheadDistance      进行设置当该行进入屏幕多少像素以内之后就开始渲染该行
 pageSize                       渲染行数
 onEndReached                   滚动到底部触发该函数
 onEndReachedThreshold          当偏移量达到设置的临界值调用onEndReached



 this.props.listData.map((d,i) =>
 <a key={"listId"+i} href={d.url} className="con-box clearfix bor-bottom">
 <img src={d.imgUrl} alt="" className="con-img"/>
 <div className="con-lab">{d.title}</div>
 </a>
 )
 */}
