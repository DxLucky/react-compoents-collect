import React from "react";
import Present from "../../app/present/present.jsx";
import SingleCalender from "../../components/timepicker/single-timepicker.jsx";
import "./timepicker-example.scss";
class TimePickerExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startDay:""
        };
        this.handleChangeCelendar=this.handleChangeCelendar.bind(this);
        this.removeParams=this.removeParams.bind(this);
    }
    handleChangeCelendar(e,key){//日历控件数据赋值
        this.setState({[key]:e})
    }
    removeParams(key){
        this.setState({[key]:""})
    }
    render(){
        let {startDay}=this.state;
        return(
            <div>
                <Present title="时间选择框"/>
                <SingleCalender value={startDay}
                                onChange={(e)=>{this.handleChangeCelendar(e,"startDay")}}
                                name="startDay"
                                placeholderText="请选择起始日期"
                                type="text"
                                className="calenderInput"
                />
                <i onClick={()=>{this.removeParams("startDay")}}>移除</i>
            </div>
        )
    }
}
export default TimePickerExample


