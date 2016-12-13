import React , {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from 'rc-form';
import {DatePicker, List, InputItem ,Button ,Toast} from 'antd-mobile';
import {getAllTableApi} from '../index/action';

@connect(state =>({

}),dispatch=>({
    searchApi:(data) => dispatch(getAllTableApi(data))
}))
export default class SearchTable extends Component{
    constructor(props){
        super(props);
        this.subBind = this.subBind.bind(this);
    }
    subBind(e){
       e.preventDefault();
       let data = this.props.form.getFieldsValue();
        console.log(data);
        this.props.searchApi(data);
    }
    render(){
        let {getFieldProps} = this.props.form;
        return (
            <div className="upload-box">
                <List>
                    <form onSubmit={this.subBind}>
                        <InputItem
                            {...getFieldProps('conferenceId')}
                            placeholder="请输入会议ID"
                            labelNumber={6}
                        >会议ID
                        </InputItem>
                        <InputItem
                            {...getFieldProps('subject')}
                            placeholder="请输入会议名称"
                            labelNumber={6}
                        >会议名称
                        </InputItem>
                        <DatePicker className="forss"
                                    mode="datetime"
                                    {...getFieldProps('startTime')}
                        >
                            <List.Item arrow="horizontal">会议开始时间</List.Item>
                        </DatePicker>
                        <DatePicker className="forss"
                                    mode="datetime"
                                    {...getFieldProps('endTime')}
                        >
                            <List.Item arrow="horizontal">会议结束时间</List.Item>
                        </DatePicker>
                        <Button className="btn" type="primary" htmlType="submit" >查询</Button>
                    </form>
                </List>
            </div>
        )
    }
}
SearchTable = createForm()(SearchTable);