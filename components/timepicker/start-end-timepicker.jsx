/* eslint react/no-multi-comp:0, no-console:0 */

require('rc-calendar/assets/index.css');
var  React = require('react');
var  ReactDOM = require('react-dom');
var  Calendar = require('rc-calendar');
var  DatePicker = require('rc-calendar/lib/Picker');
var  zhCn = require('gregorian-calendar/lib/locale/zh_CN');
var  DateTimeFormat = require('gregorian-calendar-format');
var  GregorianCalendar = require('gregorian-calendar');
var  CalendarLocale = require('rc-calendar/lib/locale/zh_CN');

var TimePickerLocale = require('rc-time-picker/lib/locale/zh_CN');
require('rc-time-picker/assets/index.css');
var TimePicker = require('rc-time-picker');

const timePickerElement = <TimePicker locale={TimePickerLocale}/>;


var  formatter = new DateTimeFormat('yyyy-MM-dd HH:mm:ss');
var  dateFormatter = new DateTimeFormat('yyyy-MM-dd');
var  SHOW_TIME = false;
var  now = new GregorianCalendar(zhCn);
now.setTime(Date.now());
function getFormatter(showTime) {
    return showTime ? formatter : dateFormatter;
}

var Picker = React.createClass({
    getInitialState(){
        return {
            showTime: this.props.showTime,
            disabled: false,
        };
    },
    getDefaultProps() {
        return {
            disabled: false,
        };
    },
    handleChange() {

    },
    render() {
        var  props = this.props;
        var _this = this;
        var  calendar = (<Calendar
            locale={CalendarLocale}
            defaultValue={now}
            formatter={props.showTime ? formatter : dateFormatter}
            timePicker={props.showTime ? timePickerElement : null}
            disabledDate={props.disabledDate}
            />);
        return (<DatePicker
            animation="slide-up"
            disabled={props.disabled}
            calendar={calendar}
            value={props.value}
            onChange={props.onChange}>
            {
                ({ value }) => {
                    return (<input type="text"
                                style={{paddingLeft:7}}
                                placeholder={this.props.placeholder}
                                name={this.props.name}
                                className={this.props.className}
                                value={value && getFormatter(props.showTime).format(value) || props.defaultTime}
                                onChange={this.handleChange}
                                />
                    );
                }
            }
        </DatePicker>);
    },
});

var StartAndEndPicker = React.createClass({
    getInitialState() {
        return {
            startValue: null,
            endValue: null,
        };
    },
    reset:function(){
        this.setState({
           startValue:null,
           endValue:null
        });
    },
    onChange(field, value) {
        console.log('onChange', field, value && getFormatter(SHOW_TIME).format(value));
        this.setState({
            [field]: value,
        });
    },

    disabledEndDate(endValue) {
        if (!endValue) {
            return false;
        }
        var  startValue = this.state.startValue;
        if (!startValue) {
            return false;
        }
        // console.log(getFormatter(SHOW_TIME).format(startValue),
        // getFormatter(SHOW_TIME).format(endValue));
        return SHOW_TIME ? endValue.getTime() < startValue.getTime() :
        endValue.compareToDay(startValue) < 0;
    },

    disabledStartDate(startValue) {
        if (!startValue) {
            return false;
        }
        var  endValue = this.state.endValue;
        if (!endValue) {
            return false;
        }
        // console.log(getFormatter(SHOW_TIME).format(startValue),
        // getFormatter(SHOW_TIME).format(endValue));
        return SHOW_TIME ? endValue.getTime() < startValue.getTime() :
        startValue.compareToDay(endValue) > 0;
    },

    render() {
        var  state = this.state;
        var { startTime, endTime } = this.props;
        return (<label>{this.props.label}
            <Picker showTime={this.props.showTime}  className={this.props.className} name='startTime' placeholder='开始时间' disabledDate={this.disabledStartDate}
                    value={state.startValue}
                    defaultTime = {startTime}
                    onChange={this.onChange.bind(this, 'startValue')}/>
            <i className='line'></i>
            <Picker showTime={this.props.showTime} className={this.props.className} name='endTime' placeholder='结束时间' disabledDate={this.disabledEndDate}
                    value={state.endValue}
                    defaultTime = {endTime}
                    onChange={this.onChange.bind(this, 'endValue')}/></label>);
    },
});

module.exports = StartAndEndPicker;
