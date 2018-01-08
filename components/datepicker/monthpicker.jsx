import React from "react";
import moment from "moment";
import classNames from "classnames";
import "./style/monthpicker.scss";
class MonthPicker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            monthArr:[["1","2","3"],["4","5","6"],["7","8","9"],["10","11","12"]],
            cureentmonth:Number(moment(props.defaultvalue).format("MM") || moment().format("MM")).toString(),
            cureentYear:moment(props.defaultvalue).format("YYYY") || moment().format("YYYY"),
            cureentYearTitle:moment(props.defaultvalue).format("YYYY") || moment().format("YYYY"),
            onSelectDate:props.defaultvalue?moment(props.defaultvalue).format("YYYY-MM"):"",
            yearArr:[],
            yearRange:"",
            showYearPlate:false,
            showPlate:false,
            isSpread:false
        };
        this.turnYear=this.turnYear.bind(this);
        this.showYearPlate=this.showYearPlate.bind(this);
        this.showPickerPlate=this.showPickerPlate.bind(this);
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
                    {onDateChange}=this.props,
                     padSelect=select.padStart(2,0),
                     onSelectDate = `${cureentYearTitle}-${padSelect}`;
                this.setState({isSpread: false,onSelectDate,cureentYear:cureentYearTitle,cureentmonth:select});
                onDateChange && onDateChange(onSelectDate);
                setTimeout(()=>{
                    this.setState({showPlate:false})
                    },
                200)
            }break;
            default:this.setState({showYearPlate:false,cureentYearTitle:select});break;
        }
    }
    showPickerPlate(e){
        e.nativeEvent.stopImmediatePropagation();
        this.setState({showPlate:true,isSpread:true});
    }
    componentWillMount() {
        document.addEventListener('click',
            ()=>{
            this.setState({
                    showYearPlate:false,
                    isSpread:false,
                    cureentYearTitle:this.state.cureentYear
                });
                setTimeout(()=>{
                        this.setState({showPlate:false})
                    },
                200)
        })
    }
    componentWillUnmount(){
        this.setState = (state,callback)=>{ //重写组件的setState方法，直接返回空
            return null;
        };
    }
    render(){
        let {monthArr,
             cureentmonth,
             showPlate,
             cureentYearTitle,
             isSpread,
             showYearPlate,
             yearArr,
             onSelectDate,
             yearRange}=this.state;
        return(
            <div className="monthpicker">
                <div onClick={this.showPickerPlate}>
                    <input placeholder="请选择月份" readOnly value={onSelectDate}/>
                    <i className="iconfont icon-rili"/>
                </div>
                {
                    showPlate ?
                        <div onClick={(e)=>{e.nativeEvent.stopImmediatePropagation()}} className={classNames("monthpicker-plate",{spreadAnimation:isSpread},{shrinkAnimation:!isSpread})}>
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
                        </div>:null
                }
            </div>
        )
    }
}

export default MonthPicker
