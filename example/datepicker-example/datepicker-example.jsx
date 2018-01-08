import React from "react";
import Present from "../../app/present/present.jsx";
import DatePicker from "../../components/datepicker/datepicker.jsx";
import MonthPicker from "../../components/datepicker/monthpicker.jsx";
import "./datepicker-example.scss";
class DatePickerExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
        this.onDateChange=this.onDateChange.bind(this);
    }
    onDateChange(date){
        console.log(date,"传回来的日期")
    }
    render(){
        return(
            <div className="DatePicker-example">
                <Present title="日期选择器"/>
                <ul className="picker-layout">
                    <li>
                        <span>月选择</span>
                        <MonthPicker
                            onDateChange={this.onDateChange}
                        />
                    </li>
                    <li>
                        <span>日期选择</span>
                        <DatePicker
                            defaultvalue="2017-12-22"
                            onDateChange={this.onDateChange}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}
export default DatePickerExample



