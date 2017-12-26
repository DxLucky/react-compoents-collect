/* eslint react/no-multi-comp:0, no-console:0 */

require('rc-calendar/assets/index.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('rc-calendar');
var DatePicker =  require('rc-calendar/lib/Picker');
var zhCN = require('rc-calendar/lib/locale/zh_CN');
var _ = require("underscore");//js库
var  enUS = require('rc-calendar/lib/locale/en_US');

var moment = require('moment');
require('moment/locale/zh-cn');
require('moment/locale/en-gb');

const format = 'YYYY-MM-DD';
const cn = location.search.indexOf('cn') !== -1;
var now = moment();
now.locale('zh-cn').utcOffset(8);
const style = `
.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-date {
  background: #ebfaff;
}

.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-selected-date .rc-calendar-date {
    background: #3fc7fa;
}
`;

const WeekCalender = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.any,
    defaultCalendarValue: React.PropTypes.any,
  },

  getInitialState() {
    
    return {
      value: undefined,
      open: false,
    };
  },
  componentWillMount: function() {
     var {defaultValue} =this.props;
    if(defaultValue){
        defaultValue = moment(defaultValue.replace(/\//g,'-'));
        this.setState({
            value:defaultValue,
            defaultValue:defaultValue
        })
    } 
  },
  onChange(value) {
    this.setState({
      value,
    });
  },

  onOpenChange(open) {
    this.setState({
      open,
    });
  },

  dateRender(current) {
    const selectedValue = this.state.value;
    if (selectedValue && current.year() === selectedValue.year() &&
      current.week() === selectedValue.week()) {
      return (<div className="rc-calendar-selected-day">
        <div className="rc-calendar-date">
          {current.date()}
        </div>
      </div>);
    }
    return (
      <div className="rc-calendar-date">
        {current.date()}
      </div>);
  },

  lastWeek() {
    const value = this.state.value || now;
    value.add(-1, 'weeks');
    this.setState({
      value,
      open: false,
    });
  },

  renderSidebar() {
    return (
      <div className="week-calendar-sidebar" key="sidebar">
        <button onClick={this.lastWeek} style={{ margin: 20 }}>上一周</button>
      </div>);
  },
  getDateRange(){
    var dates = this.state.value.clone();
    var cur = dates.format('d') == '0' ? 7: dates.format('d');
    var stDis = 1- cur;
    var st = dates.add(stDis,'days').format("YYYY/MM/DD");
    var end = dates.add(6,'days').format("YYYY/MM/DD");
    return (st+'-'+end);
  },
  reCreateValue(){
   var date = this.getDateRange();
   if(this.props.onChange) this.props.onChange(date);
   return date;
  },
  render() {
    var _this = this;
    const state = this.state;
    const time = state.value || now;
    const calendar = (
      <Calendar
        className="week-calendar"
        dateRender={this.dateRender}
        locale={zhCN}
        format={format}
        style={{ zIndex: 1000 }}
        showDateInput={false}
      />);
    return (
        <div style={{
            positon:'relative',
            display:'inline-block',
            verticalAlign:'middle'
        }}>
        <style dangerouslySetInnerHTML={{ __html: style }} />
        <DatePicker
          onOpenChange={this.onOpenChange}
          open={this.state.open}
          animation="slide-up"
          calendar={calendar}
          value={state.value}
          onChange={this.onChange}
        >
          {
            ({ value }) => {
              return (
                <input
                  style={{ width: 250,padding:0,height:35,margin:0 }}
                  disabled={state.disabled}
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input"
                  value={value && _this.reCreateValue() || ''}
                />
              );
            }
          }
        </DatePicker>
        </div>);
  },
});

module.exports = WeekCalender;