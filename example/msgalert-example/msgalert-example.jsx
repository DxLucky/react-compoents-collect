import React from "react";
import Present from "../../app/present/present.jsx";
import MsgAlert from "../../components/msgalert/msgalert.jsx";
import {NavLink} from 'react-router-dom';
class MsgAlertExample extends React.Component{
    constructor(props){
        super(props);
        this.componentAlert=this.componentAlert.bind(this);
        this.showAlert=this.showAlert.bind(this);
        this.showAlertVar=this.showAlertVar.bind(this);
        this.skipChildRoute=this.skipChildRoute.bind(this);
    }
    componentAlert(msg){
        MsgAlert.showMsg({
            msg:msg,
            timeout:20,
            fade:true
        })
    }
    showAlert(){
        this.componentAlert("请查询之后选择请查询之后选择请查询之后选择请查询之后选择请查询之后选择请查询之后选择");
    }
    showAlertVar(){
        let data={tip:"这是错误提示"};
        this.componentAlert(data.tip)
    }
    skipChildRoute(){
        this.props.history.push("/alert/childRouter")
    }
    render(){
        return(
            <div>
                <Present title="消息提示框" introduce="兼容IE8"/>
                <button className="btnCommon" onClick={this.showAlert}>点我弹出</button>
                <button className="btnCommon" onClick={this.showAlertVar}>点我弹出</button>
                <button className="btnCommon" onClick={this.skipChildRoute}>点我跳转子级路由</button>
                <p style={{marginTop:"15px"}}><NavLink to="/alert/childRouter" activeStyle={{color: '#f73352'}}>点我跳转子级路由</NavLink></p>
            </div>
        )
    }
}
export default MsgAlertExample

