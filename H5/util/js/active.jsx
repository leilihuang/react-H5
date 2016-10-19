import '../sass/active.scss';
import React , { Component }from 'react';

export default class Active extends Component{
    static defaultProps = {
        data:[]
    }
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div className="active-box">
                {
                    this.props.data.list.map((d,i)=>
                            <a key={"active"+i} className="activeA" href={d.url}>
                                <img className="imgs" src={d.imgUrl} alt=""/>
                            </a>
                    )
                }
            </div>
        )
    }
}