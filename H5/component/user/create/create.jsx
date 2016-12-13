import './create.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DatePicker, List, InputItem ,Button ,Toast} from 'antd-mobile';
import {createForm} from 'rc-form';
import {createTable} from './action';

@connect(state => {
    return {
        tables:state.userIndexRs.allTable
    }
}, dispatch => ({
    createTable:(table) => dispatch(createTable(table))
}))
export default class CreateTable extends Component {
    constructor(props) {
        super(props);
        this.subBind = this.subBind.bind(this);
        this.changeBind = this.changeBind.bind(this);
    }
    componentWillMount(){
        if(this.props.uploadData){
            console.log('upload',this.props.uploadData)
            this.props.form.setFieldsValue(this.props.uploadData);
        }
    }
    changeBind(data) {
        console.log(data)
    }
    subBind(e){
        e.preventDefault();
        let required = true;
        let formData = this.props.form.getFieldsValue();

        this.props.form.validateFields({
        }, (error, values) => {
            if (!error) {
                console.log('ok', values);
            } else {
                required = false;
                console.log('error', error, values);
            }
        });

        if(formData.endTime){
            formData.endTime = formData.endTime.format('YYYY-MM-DD HH:mm');
        }
        if(formData.startTime){
            formData.startTime = formData.startTime.format('YYYY-MM-DD HH:mm');
        }

        if(!required){
            return false
        }
        this.props.createTable(formData);
        // this.props.form.resetFields();
    }
    render() {
        const {getFieldProps ,getFieldError} = this.props.form;

        return (
            <div className="create-box">
                <List>
                    <form onSubmit={this.subBind}>
                        <InputItem
                            {...getFieldProps('conferenceId',{
                                rules: [{required: true}]
                            })}
                            placeholder="请输入会议ID"
                            labelNumber={6}
                        >会议ID<span style={{color: 'red'}}>*</span>
                        </InputItem>
                        <div className="error-box">
                            {(getFieldError('conferenceId')) ? "会议ID必填" : null}
                        </div>

                        <InputItem
                            {...getFieldProps('subject',{
                                rules: [{required: true}]
                            })}
                            placeholder="请输入会议名称"
                            labelNumber={6}
                        >会议名称<span style={{color: 'red'}}>*</span>
                        </InputItem>
                        <div className="error-box">
                            {(getFieldError('subject')) ? "会议名称必填" : null}
                        </div>

                        <DatePicker className="forss"
                                    mode="datetime"
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
CreateTable = createForm()(CreateTable);

