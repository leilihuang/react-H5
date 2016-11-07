import React , { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import detailRs from './reducer';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from './action'


class Detail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { dispatch, selectedReddit } = this.props
        console.log('selectedReddit====',selectedReddit)
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }
    render(){
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props;

        return (
            <div>
                <h1>欢迎来到详情页面</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Detail);
