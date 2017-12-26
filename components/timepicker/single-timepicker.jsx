import React from "react";
import Calendar from "rc-calendar";
import moment from "moment";
import PropTypes from 'prop-types';
import DatePicker from "rc-calendar/lib/Picker.js";
// import zhCN from "rc-calendar/lib/locale/zh_CN.js";
import "moment/locale/zh-cn.js";
import "rc-calendar/assets/index.css"

// var now = moment();
// now.locale('zh-cn').utcOffset(8);
// const format = 'YYYY-MM-DD HH:mm:ss';

let  dateFormatter = 'YYYY-MM-DD';

function getFormat(showTime) {
    return showTime || dateFormatter;
}

class SingleTimePicker extends React.Component{
    static propTypes = {
        value: PropTypes.string,
    };
    constructor(props){
        super(props);
        this.state={
            disabled:true
        };
        this.onChange=this.onChange.bind(this);
    }
    onChange(value) {
        let {format} = this.props;
        this.setState({
            value,
        });
        if(this.props.onChange) this.props.onChange(value.format(getFormat(format)));
    }
    render(){
        let {
              value,
              defaultValue,
              disabled,
              format,
              placeholderText,
              className
        }=this.props;
        if(value){
            var val = moment(value,getFormat(format));

        }
        const calendar = (
            <Calendar
                style={{ zIndex: 1000 }}
                showDateInput={false}
                formatter={getFormat(format)}
                defaultValue={defaultValue}
            />
        );
        return (
            <DatePicker
                animation="slide-up"
                disabled={disabled}
                calendar={calendar}
                value={val}
                onChange={this.onChange}
            >
                {
                    ({value})=>{
                        return (
                            <input
                                className={className ? className : "textInput"}
                                tabIndex="-1"
                                placeholder={placeholderText}
                                value={value && value.format(getFormat(format)) || ''}
                            />
                        );
                    }
                }
            </DatePicker>);
    }
}

export default SingleTimePicker;