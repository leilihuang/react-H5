import React , {Component} from 'react';
import {connect} from 'react-redux';
import Create from '../create/create';

const moment  = require('moment');

@connect(state =>({
    uploadData:state.userIndexRs.uploadTables
}),dispatch=>{

})
export default class UploadTable extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.uploadData.startTime = moment(this.props.uploadData.startTime);
        this.props.uploadData.endTime = moment(this.props.uploadData.endTime);
    }
    render(){
        return (
            <div className="upload-box">
                <Create uploadData={this.props.uploadData} />
            </div>
        )
    }
}