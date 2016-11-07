import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator} from 'antd-mobile';

@connect(state =>{
    return {
        animating:state.commonLoad.animating
    }
})
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
                <ActivityIndicator
                    toast
                    text="正在加载"
                    animating={this.props.animating}
                    />
            </div>
        )
    }
}