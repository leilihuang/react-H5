import React , {Component} from 'react';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="menu-box bor-bottom">
                {
                    this.props.data.map((d) =>
                        <a href={d.url} className="menu-a">
                            <img src={d.img} alt="" className="menu-img"/>
                            <div className="menu-text">{d.title}</div>
                        </a>
                    )
                }
            </div>
        )
    }
}