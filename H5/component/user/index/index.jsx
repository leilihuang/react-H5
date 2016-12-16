import './index.scss';
import React, {Component} from 'react';
import {Link , browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {Table, Button} from 'antd-mobile';
import {getAllTableApi, uploadTable , cancelTable ,addCheks} from './action';

@connect(state => {
    return {
        tableData: state.userIndexRs.allTable,
        checkbox: state.userIndexRs.uploadTables,
        checks:state.userIndexRs.checks,
        searchObj:state.userIndexRs.searchObj
    }
}, dispatch => ({
    getAllTable: (id) => dispatch(getAllTableApi(id)),
    setTable: (table) => dispatch(uploadTable(table)),
    cancelApi: (idArray) => dispatch(cancelTable(idArray)),
    checkBoxs: (arys) => dispatch(addCheks(arys))
}))
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.checkBind = this.checkBind.bind(this);
        this.uploadTable = this.uploadTable.bind(this);
        this.cancelMeet = this.cancelMeet.bind(this);
    }
    componentWillMount() {
        this.props.getAllTable(this.props.searchObj);
    }
    checkBind(e, table) {
        let ary=[
            ...this.props.checks,
        ];
        if (e.target.checked) {
            ary.push(table);
            this.props.checkBoxs(ary);
        } else {
            ary.find(function (obj,i,arr) {
                    if (obj.conferenceId == table.conferenceId) {
                        arr.splice(i, 1);
                        console.log(arr);
                        this.props.checkBoxs(arr);
                        return obj.conferenceId == table.conferenceId;
                    }
            }.bind(this));
        }
    }
    uploadTable(){
        if(this.props.checks.length > 0){
            this.props.setTable(this.props.checks[0]);
            browserHistory.push('/upload');
        }
    }
    cancelMeet(){
        if(this.props.checks.length > 0){
            let arrId = [];
            for(let obj of this.props.checks.values()){
                arrId.push(obj.conferenceId);
            }
            this.props.cancelApi(arrId);
        }
    }
    render() {
        console.log('render',this.props.checks);
        let stateBox = ['未开始','进行中','已结束'];
        const columns = [
            {
                title: '', key: 'checkBox', render: (text) => (
                <div onClick={(e) => this.checkBind(e, text)} className="checkbox">
                    <input className="check-box" type="checkbox"/>
                </div>
            )
            },
            {title: '会议号', dataIndex: 'conferenceId', key: 'conferenceId'},
            {title: '会议名称', dataIndex: 'subject', key: 'subject'},
            {title: '会议开始时间', dataIndex: 'startTime', key: 'startTime'},
            {title: '会议状态', dataIndex: 'status', key: 'status',render:(text) => {
                return <span className={"state-box"+ text}>{stateBox[text]}</span>
            }}
        ];
        return (
            <div className="meeting-box">
                <div className="btn-box">
                    <Button onClick={this.cancelMeet} className="btn-c btn-danger" inline>取消</Button>
                    <Link to="/create"><Button className="btn-success" inline>创建</Button></Link>
                    {this.props.checks.length > 1 ? '' : <Button className="btn-info" inline onClick={this.uploadTable}>更新</Button> }
                    <Link to="/search"><Button className="btn-primary" inline >查询</Button></Link>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.props.tableData}
                />
            </div>
        )
    }
}
