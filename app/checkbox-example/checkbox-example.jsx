import React from "react";
import Checkbox from "../../components/checkbox/checkbox.jsx"
class CheckboxExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isRemberPed:false
        };
        this.onCheckedChange=this.onCheckedChange.bind(this);
        this.test=this.test.bind(this);
    }
    onCheckedChange(ischecked){
        this.setState({
            isRemberPed:ischecked
        })
    }
    test(){
        console.log(this.state.isRemberPed)
    }
    render(){
        return(
            <div>
              <Checkbox labelText="记住密码" onCheckedChange={this.onCheckedChange}/>
                <p onClick={this.test}>打印是否选择</p>
            </div>
        )
    }
}
export default CheckboxExample


