import React from "react";
import {NavLink} from 'react-router-dom';
import "./aside.scss";
class Aside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="asideNav">
                <div>
                    <p>组件列表</p>
                    <ul>
                        <li>
                            <NavLink to="/selcet" activeStyle={{color: '#f73352'}}>下拉选择框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/alert" activeStyle={{color: '#f73352'}}>alert提示框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/checkbox" activeStyle={{color: '#f73352'}}>复选框</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Aside


