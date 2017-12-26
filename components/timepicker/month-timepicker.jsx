/* eslint react/no-multi-comp:0, no-console:0 */

import 'rc-calendar/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import DatePicker from 'rc-calendar/lib/Picker';

import zhCN from 'rc-calendar/lib/locale/zh_CN';

import moment from 'moment';
import 'moment/locale/zh-cn';

const format = 'YYYY-MM';


const now = moment();
now.locale('zh-cn').utcOffset(8);
const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

function disabledDate(value) {
  return value.year() > now.year() ||
    value.year() === now.year() && value.month() > now.month()-1;
}

var MCalendar = React.createClass({
    propTypes: {
        value: React.PropTypes.object
    },
    getInitialState: function() {
        return {
            value:this.props.defaultValue 
        };
    },
    onChange(value){
        var {onChange} = this.props
        this.setState({value})
        if(onChange) onChange(value)
    },
    render(){
        const state = this.state;
        const calendar =(
           <MonthCalendar
              locale={zhCN}
              disabledDate={this.props.disabledDate ? disabledDate : null}
              style={{ zIndex: 1000 }}
            /> 
        )
        return (
            <DatePicker
                animation="slide-up"
                calendar={calendar}
                value={state.value}
                onChange={this.onChange}
                >
                {
            ({ value }) => {
                return (<input
                    className="textInput"
                    readOnly
                    value={value && value.format(format)}
                    placeholder="请选择日期"
                  />);
                }
              }
            </DatePicker>
        )
    }
})

module.exports = MCalendar;