import React from "react";
import classNames from "classnames";
import "./checkbox.scss";

class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isChecked:this.props.defaultChecked
        };
        this.checkedChange=this.checkedChange.bind(this)
    }
    checkedChange(){
        let {onCheckedChange,itemDetail}=this.props;
        this.setState({
            isChecked:!this.state.isChecked
        });
        itemDetail? onCheckedChange(!this.state.isChecked,itemDetail):onCheckedChange(!this.state.isChecked)
    }
    render(){
        let {isChecked}=this.state;
        let {labelText}=this.props;
        return(
            <div onClick={this.checkedChange} className={classNames('checkBox',this.props.className)}>
                <span className={classNames({Checked:isChecked})}></span>
                <span>{labelText}</span>
            </div>
        )
    }
}
export default Checkbox



