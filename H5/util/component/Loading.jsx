import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator} from 'antd-mobile';


export default class Loading extends Component{
    static defaultProps = {
        animating:false,
        color:'white',
        size:'large',
        toast:false,
        text:''
    };
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="util-loading toast-example">
                <ActivityIndicator {...this.props} />
            </div>
        )
    }
}