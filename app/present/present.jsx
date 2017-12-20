import React from "react";
import "./present.scss"
class Present extends React.Component{
    render(){
        let {title,introduce}=this.props;
        if(!title && !introduce) return null;
        return(
            <div className="present">
                <h4>{title || null}</h4>
                <ul>
                    {
                        typeof introduce==="string" || introduce===undefined?
                            <li>{introduce || "没啥特别的，哈哈"}</li>:
                            introduce.map((item,i)=>{
                               return <li key={i}>{item}</li>
                            })
                    }
                </ul>
                <h4>例子</h4>
            </div>
        )
    }
}
export default Present;

