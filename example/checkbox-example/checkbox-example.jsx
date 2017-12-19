import React from "react";
import Present from "../../app/present/present.jsx";
import Checkbox from "../../components/checkbox/checkbox.jsx"
class CheckboxExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cureentChecked:true
        };
        this.onCheckedChange=this.onCheckedChange.bind(this);
    }
    onCheckedChange(ischecked){
        this.setState({
            cureentChecked:ischecked
        })
    }
    render(){
        let {cureentChecked}=this.state;
        return(
            <div className="checkBox-example">
              <Present title="复选框"/>
              <Checkbox labelText="记住密码" sendChecked={cureentChecked} onCheckedChange={this.onCheckedChange}/>
                <p>
                    <span>
                        当前选择：{cureentChecked ? "是(true)":"否(false)"}
                    </span>
                </p>
            </div>
        )
    }
}
export default CheckboxExample


