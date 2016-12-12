import './create.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DatePicker, List, InputItem ,Button ,Toast} from 'antd-mobile';
import {createForm} from 'rc-form';
import {browserHistory} from 'react-router';
import {addTable} from '../index/action';

@connect(state => {
    return {
        tables:state.detailRs.allTable
    }
}, dispatch => ({
    createTable:(table) => dispatch(addTable(table))
}))
export default class Create extends Component {
    constructor(props) {
        super(props);
        this.subBind = this.subBind.bind(this);
        this.changeBind = this.changeBind.bind(this);
    }
    changeBind(data) {
        console.log(data)
    }
    subBind(e){
        e.preventDefault();
        this.props.form.validateFields({
        }, (error, values) => {
            if (!error) {
                console.log('ok', values);
            } else {
                console.log('error', error, values);
            }
        });

        let required = true;
        let formData = this.props.form.getFieldsValue();
        if(formData.endTime){
            formData.endTime = formData.endTime.format('YYYY-MM-DD HH:mm');
        }
        if(formData.startTime){
            formData.startTime = formData.startTime.format('YYYY-MM-DD HH:mm');
        }
        for(let keys in formData){
            if(!formData[keys]){
                required = false;
            }
        }
        if(!required){
            Toast.fail('必填项未填，请填写完整信息!!!', 1);
            return false
        }
        this.props.createTable(formData);
        this.props.form.resetFields();
        browserHistory.push('/User');
    }
    render() {
        const {getFieldProps ,getFieldError} = this.props.form;

        return (
            <div className="create-box">
                <List>
                    <form onSubmit={this.subBind}>
                        <InputItem
                            {...getFieldProps('meetingId',{
                                rules: [{required: true}]
                            })}
                            placeholder="请输入会议ID"
                            labelNumber={6}
                        >会议ID<span style={{color: 'red'}}>*</span>
                        </InputItem>
                        <div className="error-box">
                            {(getFieldError('meetingId')) ? "会议ID必填" : null}
                        </div>

                        <InputItem
                            {...getFieldProps('meetingName',{
                                rules: [{required: true}]
                            })}
                            placeholder="请输入会议名称"
                            labelNumber={6}
                        >会议名称<span style={{color: 'red'}}>*</span>
                        </InputItem>
                        <div className="error-box">
                            {(getFieldError('meetingName')) ? "会议名称必填" : null}
                        </div>

                        <DatePicker className="forss"
                                    mode="datetime"
                                    onChange={this.changeBind}
                                    {...getFieldProps('startTime',{
                                        rules: [{required: true}]
                                    })}
                        >
                            <List.Item arrow="horizontal">会议开始时间<span style={{color: 'red'}}>*</span></List.Item>
                        </DatePicker>
                        <div className="error-box">
                            {(getFieldError('startTime')) ? "会议开始时间必填" : null}
                        </div>

                        <DatePicker className="forss"
                                    mode="datetime"
                                    format = {(val)=>{
                                        return val.format('YYYY-MM-DD HH:mm')
                                    }}
                                    {...getFieldProps('endTime',{
                                        rules: [{required: true}]
                                    })}
                        >
                            <List.Item arrow="horizontal">会议结束时间<span style={{color: 'red'}}>*</span></List.Item>
                        </DatePicker>
                        <div className="error-box">
                            {(getFieldError('endTime')) ? '会议结束时间必填' : null}
                        </div>

                        <Button className="btn" type="primary" htmlType="submit" >创建</Button>
                    </form>
                </List>

            </div>
        )
    }
}
Create = createForm()(Create);

