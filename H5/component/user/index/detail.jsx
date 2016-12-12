import './detail.scss';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Table , Button} from 'antd-mobile';
import {getAllTableApi} from './action';

@connect(state => {
    return {
        tableData: state.detailRs.allTable
    }
}, dispatch => ({
    getAllTable: (id) => dispatch(getAllTableApi(id))
}))
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.checkBind = this.checkBind.bind(this);
    }
    componentDidMount() {
        this.props.getAllTable(1);
    }
    checkBind(text) {
        console.log(text)
    }
    render() {
        const columns = [
            {
                title: '', key: 'checkBox', render: (text) => (
                <div onClick={() => this.checkBind(text)} className="checkbox">
                    <input className="check-box" type="checkbox"/>
                </div>
            )
            },
            {title: '会议ID', dataIndex: 'meetingId', key: 'meetingId'},
            {title: '会议名称', dataIndex: 'meetingName', key: 'meetingName'},
            {title: '会议开始时间', dataIndex: 'startTime', key: 'startTime'},
            {title: '会议结束时间', dataIndex: 'endTime', key: 'endTime'}
        ];



        return (
            <div className="meeting-box">
                <div className="btn-box">
                    <Button className="btn-c" inline>取消</Button>
                    <Link to="/create"><Button inline>创建</Button></Link>
                    <Button inline>更新</Button>
                    <Button  inline>查询</Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.props.tableData}
                />
            </div>
        )
    }
}

