import React from "react";
import Present from "../../app/present/present.jsx";
import Checkbox from "../../components/checkbox/checkbox.jsx";
import "./checkbox-example.scss"
class CheckboxExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cureentChecked:true,
            changeChecked:false
        };
        this.onCheckedChange=this.onCheckedChange.bind(this);
        this.changeCheckedFun=this.changeCheckedFun.bind(this);
    }
    onCheckedChange(ischecked){
        this.setState({
            cureentChecked:ischecked
        })
    }
    changeCheckedFun(){
        this.setState({
            changeChecked:!this.state.changeChecked
        })
    }
    render(){
        let {cureentChecked,changeChecked}=this.state;
        return(
            <div className="checkBox-example">
              <Present title="复选框"/>
              <Checkbox labelText="记住密码" defaultChecked onCheckedChange={this.onCheckedChange}/>
                <p>
                    <span>
                        当前选择：{cureentChecked ? "是(true)":"否(false)"}
                    </span>
                </p>
                <br/>
                <Checkbox labelText="函数切换选中" sendChecked={changeChecked} onCheckedChange={this.changeCheckedFun}/>
                <button className="btnCommon" onClick={this.changeCheckedFun}>点我函数切换下面复选框选中与否</button>
                <p>
                    <span>
                        当前选择：{changeChecked ? "是(true)":"否(false)"}
                    </span>
                </p>
            </div>
        )
    }
}
export default CheckboxExample


