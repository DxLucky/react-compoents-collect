import React from "react";
import "./present.scss"
class Present extends React.Component{
    render(){
        let {title,introduce}=this.props;
        if(!title && !introduce) return null;
        return(
            <div className="present">
                <h4>{title || null}</h4>
                <span>{introduce || "没啥特别的，哈哈"}</span>
                <h4>例子</h4>
            </div>
        )
    }
}
export default Present;

