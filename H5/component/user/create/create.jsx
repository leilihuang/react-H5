import './create.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DatePicker, List, InputItem, Button, Toast ,Icon } from 'antd-mobile';
import {createForm} from 'rc-form';
import {createTable, getMeetUserApi} from './action';

@connect(state => {
    return {
        allUser: state.createTabRs.allUser,
        tables: state.userIndexRs.allTable
    }
}, dispatch => ({
    createTable: (table) => dispatch(createTable(table)),
    getUserApi: () => dispatch(getMeetUserApi())
}))
export default class CreateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagBox:[],
            meetUser:''
        };

        this.subBind = this.subBind.bind(this);
        this.changeBind = this.changeBind.bind(this);
        this.addTags = this.addTags.bind(this);
    }

    componentWillMount() {
        this.props.getUserApi();
        if (this.props.uploadData) {
            this.props.form.setFieldsValue(this.props.uploadData);
        }
    }
    changeBind(data) {
        console.log(data)
    }
    subBind(e) {
        e.preventDefault();
        let required = true;
        let formData = this.props.form.getFieldsValue();

        this.props.form.validateFields({}, (error, values) => {
            if (!error) {
                console.log('ok', values);
            } else {
                required = false;
                console.log('error', error, values);
            }
        });

        if (formData.startTime) {
            formData.startTime = formData.startTime.format('YYYY-MM-DD HH:mm');
        }
        if (formData.endTime) {
            formData.endTime = formData.endTime.format('HH:mm');
        }

        if (!required) {
            return false
        }
        this.props.createTable(Object.assign({},formData,{attendeeName:this.state.tagBox}));
    }
    addTags(e) {
        this.setState({
            meetUser:e.target.value
        });

        if(e.target.value == ""){
            return false;
        }
        let bool = this.state.tagBox.find(function (val) {
            return val == e.target.value
        });
        if(!bool){
            this.state.tagBox.push(e.target.value);
            this.setState({
                tagBox:this.state.tagBox
            });
        }
        console.log(this.state.tagBox);
    }
    closeTag(tag){
        this.state.tagBox.find(function (val, index, arr) {
            if(val == tag){
                let d = this.state.tagBox.splice(index,1);
                this.setState({
                    tagBox:this.state.tagBox
                });
                console.log(this.state.tagBox);
                return val == tag;
            }
        }.bind(this));
        if(this.state.tagBox.length == 0){
            this.setState({
                meetUser:''
            })
        }
    }

    render() {
        const {getFieldProps, getFieldError} = this.props.form;

        return (
            <div className="create-box">
                <List>
                    <form onSubmit={this.subBind}>
                        <InputItem
                            {...getFieldProps('conferenceId', {
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
                            {...getFieldProps('subject', {
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
                                    {...getFieldProps('startTime', {
                                        rules: [{required: true}]
                                    })}
                        >
                            <List.Item arrow="horizontal">会议开始时间<span style={{color: 'red'}}>*</span></List.Item>
                        </DatePicker>
                        <div className="error-box">
                            {(getFieldError('startTime')) ? "会议开始时间必填" : null}
                        </div>

                        <DatePicker className="forss"
                                    mode="time"
                                    {...getFieldProps('endTime', {
                                        rules: [{required: true}]
                                    })}
                        >
                            <List.Item arrow="horizontal">会议时常<span style={{color: 'red'}}>*</span></List.Item>
                        </DatePicker>
                        <div className="error-box">
                            {(getFieldError('endTime')) ? '会议时常时间必填' : null}
                        </div>

                        {
                            !this.props.uploadData ?
                                <div>
                                    <div className="am-list-item am-input-item">
                                        <div className="am-input-label am-input-label-6">
                                            选择参会人<span style={{color: "red"}}>*</span>
                                        </div>
                                        <div className="am-input-control">
                                            <select onChange={this.addTags} value={this.state.meetUser}>
                                                <option value="">请选择</option>
                                                {
                                                    this.props.allUser.map((d) =>
                                                        <option value={d.name}>{d.name}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="tags-box">
                                        {
                                            this.state.tagBox.map((d) =>
                                                <div onClick = {this.closeTag.bind(this,d)} className="tags">
                                                    <Icon type="cross-circle" />
                                                    {d}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div> : ''
                        }

                        <Button className="btn" type="primary" htmlType="submit">创建</Button>
                    </form>
                </List>

            </div>
        )
    }
}
CreateTable = createForm()(CreateTable);