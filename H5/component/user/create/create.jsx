import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DatePicker, List, InputItem ,Button ,Toast} from 'antd-mobile';
import {createForm} from 'rc-form';

@connect(state => {
    return {
        tables:state.detailRs.allTable
    }
}, dispatch => ({

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
    subBind(){
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
        console.log(formData);

    }
    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div className="create-box">
                <List>
                    <InputItem
                        {...getFieldProps('meetingId',{
                            validateTrigger: 'onBlur',
                            rules: [{required: true}],
                        })}
                        placeholder="请输入会议ID"
                        labelNumber={6}
                    >会议ID<span style={{color: 'red'}}>*</span>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('meetingName')}
                        placeholder="请输入会议名称"
                        labelNumber={6}
                        required
                    >会议名称<span style={{color: 'red'}}>*</span>
                    </InputItem>
                    <DatePicker className="forss"
                                mode="datetime"
                                onChange={this.changeBind}
                                {...getFieldProps('startTime')}
                    >
                        <List.Item arrow="horizontal">会议开始时间<span style={{color: 'red'}}>*</span></List.Item>
                    </DatePicker>
                    <DatePicker className="forss"
                                mode="datetime"
                                onChange={(data) =>{
                                    this.changeBind(data);
                                }}
                                format = {(val)=>{
                                    return val.format('YYYY-MM-DD HH:mm')
                                }}
                                {...getFieldProps('endTime')}
                    >
                        <List.Item arrow="horizontal">会议结束时间<span style={{color: 'red'}}>*</span></List.Item>
                    </DatePicker>
                    <Button className="btn" type="primary" onClick={this.subBind}>创建</Button>
                </List>
            </div>
        )
    }
}
Create = createForm()(Create);

