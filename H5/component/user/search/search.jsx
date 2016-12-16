import React , {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from 'rc-form';
import {browserHistory} from 'react-router';
import {DatePicker, List, InputItem ,Button ,Toast} from 'antd-mobile';
import {searchObj} from '../index/action';

@connect(state =>({

}),dispatch=>({
    searchApi:(data) => dispatch(searchObj(data))
}))
export default class SearchTable extends Component{
    constructor(props){
        super(props);
        this.subBind = this.subBind.bind(this);
    }
    subBind(e){
       e.preventDefault();
       let data = this.props.form.getFieldsValue();
       console.log(data)
        this.props.searchApi(data);
        browserHistory.push('/Index');
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
                        <Button className="btn" type="primary" htmlType="submit" >查询</Button>
                    </form>
                </List>
            </div>
        )
    }
}
SearchTable = createForm()(SearchTable);