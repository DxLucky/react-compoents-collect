import React from "react";
import Aside from "../app/aside/aside.jsx";
import Login from "../app/login/login.jsx";
import "../asset/style/common.scss";
class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true
        };
        this.loginSuccess=this.loginSuccess.bind(this);
        this.exitLogin=this.exitLogin.bind(this);
    }
    loginSuccess(){
        this.setState({isLogin:true})
    }
    exitLogin(){
        this.setState({isLogin:false})
    }
    render(){
        let {isLogin}=this.state;
        if(!isLogin){
            return <Login goLogin={this.loginSuccess}/>
        }else {
            return(
                <div className="mainBox">
                    <div className="bodyBox">
                        <Aside exitLogin={this.exitLogin}/>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Layout;
