import React from "react";
import moment from "moment";
import classNames from "classnames";
import "./style/datepicker.scss";
class DatePicker extends React.Component{
    constructor(props){
        super(props);
        let onSelectDateDay=Number(moment(props.defaultvalue).format("DD") || moment().format("DD"));//初始天
        this.state={
            initMonth:moment(props.defaultvalue).format("YYYY-MM") || moment().format("YYYY-MM"),//初始年月
            yearTitle:moment(props.defaultvalue).format("YYYY") || moment().format("YYYY"),//初始年
            monthTitle:Number(moment(props.defaultvalue).format("MM") || moment().format("MM")),//初始月
            onSelectDateVal:props.defaultvalue?moment(props.defaultvalue).format("YYYY-MM-DD"):"",//初始日期
            calendarData:this.monthDay(moment(props.defaultvalue).format("YYYY-MM") || moment().format("YYYY-MM"),onSelectDateDay),//初始日历
            showDatePicker:false,
            showMonthPicker:false,
            showYearPicker:false,
            onSelectDateYear:moment(props.defaultvalue).format("YYYY") || moment().format("YYYY"),
            onSelectDateMonth:Number(moment(props.defaultvalue).format("MM") || moment().format("MM")),//初始月
            onSelectDateDay
        };
        this.monthDay=this.monthDay.bind(this);
        this.turnYearMonth=this.turnYearMonth.bind(this);
        this.reRenderCalender=this.reRenderCalender.bind(this);
        this.onSelectYearMonth=this.onSelectYearMonth.bind(this);
        this.showPicker=this.showPicker.bind(this);
        this.showDatePicker=this.showDatePicker.bind(this);
        this.onSelectDate=this.onSelectDate.bind(this);
        this.onSelectToday=this.onSelectToday.bind(this);
    }
    monthDay(initMonth,onSelectDateDay){
        const daysArr =[], // 6*7的日历数组
              currentWeekday = moment(initMonth).date(1).weekday()-1, // 获取当月1日为星期几
              lastMonthDays = moment(initMonth).subtract(1, 'month').daysInMonth(), // 获取上月天数
              monthTitleDays = moment(initMonth).daysInMonth(),// 获取当月天数
              getDay = day => (day <= lastMonthDays ? day : (day <= (lastMonthDays + monthTitleDays)) ? day - lastMonthDays : day - (lastMonthDays + monthTitleDays)), // 日期处理
              lineNum=Math.ceil((monthTitleDays + currentWeekday+1)/7);//根据每月的天数确定行
        for(let j=0;j<lineNum; j += 1){
            daysArr[j]=[];
            for(let i = 0; i < 7; i += 1){
                let virtualDay = (lastMonthDays - currentWeekday) + i,
                    singleNum=getDay(virtualDay + (j * 7));
                switch (j){
                    case lineNum-1:singleNum>7?
                            (i===6 || i===5)?daysArr[j][i]={day:singleNum,weekend:true}:daysArr[j][i]={day:singleNum}
                            :
                            daysArr[j][i]=null;break;
                    case 0:
                        singleNum<=7?
                            (i===6 || i===5)?daysArr[j][i]={day:singleNum,weekend:true}:daysArr[j][i]={day:singleNum}
                            :
                            daysArr[j][i]=null;break;
                    default:(i===6 || i===5)?daysArr[j][i]={day:singleNum,weekend:true}:daysArr[j][i]={day:singleNum}
                }
            }
        }
        console.log(daysArr,'daysArr')
        return daysArr;
    }
    reRenderCalender(initMonth,yearTitle,monthTitle){
        let  calendarData=this.monthDay(initMonth,this.state.onSelectDateDay);
        this.setState({calendarData,initMonth,yearTitle,monthTitle})
    }
    turnYearMonth(y=0,m=0){
        let month=this.state.monthTitle-1,
            yaer=Number(this.state.yearTitle),
            initMonth=moment().year(yaer+y).month(month+m).format("YYYY-MM"),//格式化年月
            yearTitle=moment().year(yaer+y).month(month+m).format("YYYY"),//格式化年
            monthTitle=Number(moment().month(month+m).format("MM"));//格式化月
        this.reRenderCalender(initMonth,yearTitle,monthTitle);
    }
    showPicker(type=undefined){
        !type ? this.setState({showMonthPicker:true}):this.setState({showYearPicker:true});
    }
    showDatePicker(){
        this.setState({showDatePicker:true})
    }
    onSelectYearMonth(date,type){
        let yearTitle=date.year,//初始年
            monthTitle=date.month || String(this.state.monthTitle),//初始月
            padMonth=monthTitle.padStart(2,0),
            initMonth=moment().format(`${yearTitle}-${padMonth}`),//初始年月 2017-12  用于转换
            calendarData=this.monthDay(initMonth);
        type==="yearPlate" ? this.setState({calendarData,initMonth,yearTitle,monthTitle,showYearPicker:false}):this.setState({calendarData,initMonth,yearTitle,monthTitle,showMonthPicker:false})
    }
    onSelectDate(e,day){
        e.nativeEvent.stopImmediatePropagation();
        day=String(day).padStart(2,0);
        let {yearTitle,monthTitle}=this.state,
            {onDateChange}=this.props,
             monthTitlePad=String(monthTitle).padStart(2,0),
             onSelectDateVal=`${yearTitle}-${monthTitlePad}-${day}`,
             onSelectDateDay=Number(day);
        this.setState({onSelectDateVal,onSelectDateDay,showDatePicker:false});
        onDateChange && onDateChange(onSelectDateVal);
    }
    onSelectToday(){
        let onSelectDateVal=moment().format("YYYY-MM-DD"),
            onSelectDateDay=Number(moment().format("DD")),
            {onDateChange}=this.props;
        this.setState({onSelectDateVal,onSelectDateDay,showDatePicker:false});
        onDateChange && onDateChange(onSelectDateVal);
    }
    componentWillMount() {
        document.addEventListener('click',
            ()=>{this.setState({
                showDatePicker:false,
                showMonthPicker:false,
                showYearPicker:false,
                yearTitle:this.state.onSelectDateYear,
                monthTitle:this.state.onSelectDateMonth
            })}
        )
    }
    componentWillUnmount(){
        this.setState = ()=>{ //重写组件的setState方法，直接返回空
            return null;
        };
    }
    render(){
        let {calendarData,
             showMonthPicker,
             showYearPicker,
             yearTitle,
             showDatePicker,
             onSelectDateVal,
             onSelectDateDay,
             monthTitle}=this.state;
        return(
            <div className="datepicker" onClick={(e)=>{e.nativeEvent.stopImmediatePropagation()}}>
                <div onClick={this.showDatePicker}>
                    <input placeholder="请选择日期" value={onSelectDateVal} readOnly/>
                    <i className="iconfont icon-rili"/>
                </div>
                {
                    showDatePicker?
                        <div className="datepicker-plate">
                        <input placeholder="请选择日期" value={onSelectDateVal} readOnly/>
                        <ul className="plate-header">
                            <li className="leftArea">
                                <span onClick={()=>{this.turnYearMonth(-1,0)}}/>
                                <span onClick={()=>{this.turnYearMonth(0,-1)}}/>
                            </li>
                            <li className="centerArea">
                                <span onClick={()=>{this.showPicker()}}>{monthTitle}月</span>
                                <span onClick={()=>{this.showPicker("yearPlate")}}>{yearTitle}年</span>
                            </li>
                            <li className="rightArea">
                                <span onClick={()=>{this.turnYearMonth(0,1)}}/>
                                <span onClick={()=>{this.turnYearMonth(1,0)}}/>
                            </li>
                            {
                                showMonthPicker?
                                    <li className="monthpickerArea">
                                        <MonthPickerPlate
                                            monthTitle={monthTitle}
                                            yearTitle={yearTitle}
                                            onSelectYearMonth={this.onSelectYearMonth}
                                        />
                                    </li> :null
                            }
                            {
                                showYearPicker?
                                    <li className="monthpickerArea">
                                        <MonthPickerPlate
                                            yearTitle={yearTitle}
                                            showYearPicker={showYearPicker}
                                            onSelectYearMonth={this.onSelectYearMonth}
                                        />
                                    </li> :null
                            }
                        </ul>
                        <div className="plate-body">
                            <ul className="plate-week">
                                <li>一</li>
                                <li>二</li>
                                <li>三</li>
                                <li>四</li>
                                <li>五</li>
                                <li>六</li>
                                <li>日</li>
                            </ul>
                            {
                                calendarData && calendarData.length>0?
                                    calendarData.map((row,i)=>{
                                        return(
                                            <ul key={i} className="plate-day">
                                                {
                                                    row.map((col,j)=>{
                                                        return <EachDay
                                                                        key={j}
                                                                        dayDetail={col}
                                                                        onSelectDate={this.onSelectDate}
                                                                        onSelectDateDay={onSelectDateDay}
                                                        />
                                                    })
                                                }
                                            </ul>
                                        )
                                    }):null
                            }
                        </div>
                        <ul className="plate-footer">
                            <li onClick={this.onSelectToday}>
                                {
                                    !showMonthPicker && !showYearPicker ?
                                        <span>今天</span>:null
                                }
                            </li>
                        </ul>
                    </div>:null
                }
            </div>
        )
    }
}
class MonthPickerPlate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            monthArr:[["1","2","3"],["4","5","6"],["7","8","9"],["10","11","12"]],
            cureentmonth:String(props.monthTitle),
            cureentYearTitle:props.yearTitle,
            yearArr:[],
            yearRange:"",
            showYearPlate:false
        };
        this.turnYear=this.turnYear.bind(this);
        this.showYearPlate=this.showYearPlate.bind(this);
        this.onSelected=this.onSelected.bind(this);
    }
    turnYear(i=0,type){
        switch (type){
            case "range":{
                let {yearRange}=this.state,
                    sendYear=Number(yearRange.substr(0,4))+i;
                this.showYearPlate(sendYear)
            }break;
            default:{
                let cureentYearTitle=Number(this.state.cureentYearTitle)+i;
                this.setState({cureentYearTitle})
            }break;
        }
    }
    componentWillMount(){
        let {showYearPicker,yearTitle}=this.props;
        showYearPicker && this.showYearPlate(yearTitle);
    }
    showYearPlate(cureentYear){
        let {cureentYearTitle}=this.state,
            cureentYearCut=String(cureentYear).substr(0,3),
            cureentYearIndex=String(cureentYearTitle).substr(3),
            row=parseInt(cureentYearIndex/3),
            col=cureentYearIndex%3,
            yearArr=[],index=0,yearRange;
        for (let i=0;i<4;i++){
            yearArr[i]=[];
            for(let j=0;j<3;j++){
                if(index>9){break;}
                let yaerConcat=cureentYearCut+index;
                if(i===0 && j===0){yearRange=`${yaerConcat}年-`}
                if(i===3 && j===0){yearRange+=`${yaerConcat}年`}
                (i===row && j===col)?yearArr[i][j]={year:yaerConcat,selectIndex:true}:yearArr[i][j]={year:yaerConcat};
                index++
            }
        }
        this.setState({showYearPlate:true,yearArr,yearRange})
    }
    onSelected(select,type){
        switch (type){
            case "month": {
                let {cureentYearTitle} = this.state,
                    {onSelectYearMonth}=this.props;
                    onSelectYearMonth({year:cureentYearTitle,month:select})
            }break;
            default:{
                let {showYearPicker,onSelectYearMonth}=this.props;
                     showYearPicker ? onSelectYearMonth({year:select},"yearPlate"):this.setState({showYearPlate:false,cureentYearTitle:select});
            }break;
        }
    }
    render(){
        let {monthArr,
            cureentmonth,
            cureentYearTitle,
            showYearPlate,
            yearArr,
            yearRange}=this.state;
       return(
           <div className="monthpicker-plate">
               {
                   !showYearPlate?
                       <ul className="plate-header">
                           <li className="leftArea">
                               <span className="turnBefore" onClick={()=>{this.turnYear(-1)}}/>
                           </li>
                           <li className="centerArea">
                               <span onClick={()=>{this.showYearPlate(cureentYearTitle)}}>{cureentYearTitle}年</span>
                           </li>
                           <li className="rightArea">
                               <span className="turnAfter" onClick={()=>{this.turnYear(1)}}/>
                           </li>
                       </ul>
                       :
                       <ul className="plate-header">
                           <li className="leftArea">
                               <span className="turnBefore" onClick={()=>{this.turnYear(-10,"range")}}/>
                           </li>
                           <li className="yearRange">
                               <span>{yearRange}</span>
                           </li>
                           <li className="rightArea">
                               <span  className="turnAfter" onClick={()=>{this.turnYear(10,"range")}}/>
                           </li>
                       </ul>
               }
               {
                   !showYearPlate?
                       <div className="plate-body">
                           {
                               monthArr.map((row, i) => {
                                   return (
                                       <ul key={i}>
                                           {row.map((col, j) => {
                                               return <li
                                                   key={j}
                                                   className={classNames({active:col===cureentmonth})}
                                                   onClick={()=>this.onSelected(col,"month")}
                                               >{col}月</li>
                                           })}
                                       </ul>
                                   )
                               })
                           }
                       </div>
                       :
                       <div className="plate-body">
                           {
                               yearArr.map((row, i) => {
                                   return (
                                       <ul key={i}>
                                           {row.map((col, j) => {
                                               return <li
                                                   key={j}
                                                   className={classNames({active:col.selectIndex})}
                                                   onClick={()=>this.onSelected(col.year,"year")}
                                               >{col.year}</li>
                                           })}
                                       </ul>
                                   )
                               })
                           }
                       </div>
               }
           </div>
       )
    }
}

class EachDay extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {dayDetail,onSelectDate,onSelectDateDay}=this.props;
        switch (dayDetail){
            case null:return(<li/>);break;
            default:return(
                <li className={classNames("eachDay",
                    {weekend:dayDetail.weekend},
                    {active:dayDetail.day===onSelectDateDay})
                }
                    onClick={(e)=>{onSelectDate(e,dayDetail.day)}}
                >
                    {dayDetail.day}
                </li>
            )
        }
    }
}

export default DatePicker;