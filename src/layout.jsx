import React from "react";
import Aside from "../app/aside/aside.jsx";
import "../asset/style/common.scss";
class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="mainBox">
                <div className="bodyBox">
                    <Aside/>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;
