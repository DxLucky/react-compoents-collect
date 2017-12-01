import React from "react";
import Alert from "../../components/alert/alert.jsx";//下拉框
import "./alert-example.scss"
class AlertExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
        this.componentAlert=this.componentAlert.bind(this);
        this.showAlert=this.showAlert.bind(this);
        this.showAlertVar=this.showAlertVar.bind(this);
    }
    componentAlert(msg){
        Alert.showMsg({
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
    render(){
        return(
            <div>
               <button onClick={this.showAlert}>点我弹出</button>
                <button onClick={this.showAlertVar}>点我弹出</button>
            </div>
        )
    }
}
export default AlertExample

