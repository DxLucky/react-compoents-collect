import React from "react";
import classnames from "classnames";
import Checkbox from "../../checkbox/checkbox.jsx";
import Pagination from "../pagination/pagination.jsx";

import "./table.scss";
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sortOrder:0
        };
        this.onPageChange=this.onPageChange.bind(this);
        this.checkedSingleChange=this.checkedSingleChange.bind(this);
        this.checkIsCheckedAll=this.checkIsCheckedAll.bind(this);
        this.checkedAllChange=this.checkedAllChange.bind(this);
        this.selectArr=[];
    }
    componentWillMount(){
        let hasCheckBox=this.props.column.some((item)=>{
            return item.colName=="checkBox"
        });
        this.isHasChecked=hasCheckBox;
    }
    onPageChange(page){
        let {pagination}=this.props;
        this.state.sortOrder=(page.pageNo-1)*page.pageSize;
        pagination.onPageChange(page)
    }
    checkedSingleChange(checked,itemDetail){
        itemDetail.isChecked=checked;
        checked ?
            this.selectArr.push(itemDetail):
            (
                this.selectArr.some((item,i)=>{
                    if(itemDetail.id==item.id){
                        return this.selectArr.splice(i,1);
                    }
                })
            );
        this.checkIsCheckedAll()
    }
    checkedAllChange(){
        let {checkedAll}=this.state,
            {data}=this.props;
        if(!checkedAll){
            this.selectArr=[...data];
        }else {
            this.selectArr=[]
        }
        data.length>0 && data.map((item)=>{
            item.isChecked=!checkedAll
        });
        this.checkIsCheckedAll()
    }
    checkIsCheckedAll(){
        let {data}=this.props;
        let equalAll=this.selectArr.length===data.length;
        console.log(this.selectArr,'this.selectArr')//已经选中的数据
        this.setState({checkedAll:equalAll})
    }
    render(){
        let {sortOrder,checkedAll}=this.state;
        let {
           data,//表格原始数据
           column,//展现的列
           loading,//加载中图片，若不传默认false
           hasBoder,//是否有边框,若不传默认false
           tableWidth,//表格宽度(如tableWidth="500")，若不传默认100%
           pagination//是否有分页，若不传默认false
        }=this.props;
        let totalColNum=column.length;
        data.length>0 && data.map((item,i)=>{
            item.tdValue=[];
            column.forEach((colItem)=>{
                let formatcolVal;
                switch (colItem.colName){
                    case "orderNum":formatcolVal=sortOrder+i+1;break;
                    case "checkBox":formatcolVal=
                        <Checkbox sendChecked={item.isChecked} onCheckedChange={this.checkedSingleChange} itemDetail={item}/>;
                        break;
                    default:formatcolVal=item[colItem.colName]
                }
                item.tdValue.push(
                    {
                        val:formatcolVal,
                        color:colItem.fontColor?colItem.fontColor:null
                    }
                );
            })
        });
        return(
            <div className={classnames("tableBox",{hasBoder:hasBoder})}>
                <table cellPadding="0" cellSpacing="0" width={tableWidth?tableWidth:"100%"}>
                    <thead>
                        <tr>
                            {column.map((item,i)=>{
                                return(
                                    <th key={i}
                                        style={{width:item.width}}
                                    >
                                        {item.title=="checkBox"?
                                            <Checkbox sendChecked={checkedAll} onCheckedChange={this.checkedAllChange}/>:
                                            item.title
                                        }
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="tbodyControl">
                    {
                        loading ?
                            <tr>
                                <td colSpan={totalColNum}>
                                    <img src={require("./images/loading.gif")}/>
                                </td>
                            </tr>:
                            (
                                data.length>0 ?
                                    data.map((item,i)=>{
                                        return <tr key={i}>
                                            {
                                                item.tdValue.map((tdVal,j)=>{
                                                    return <td style={{color:tdVal.color}} key={j}>{tdVal.val}</td>
                                                })
                                            }
                                        </tr>
                                    }):
                                    <tr><td colSpan={totalColNum}>没有数据</td></tr>
                            )
                    }
                    </tbody>
                </table>
                {
                    pagination.total?
                        <Pagination total={pagination.total}  showGoPage={true} onPageChange={this.onPageChange}/>:null
                }
            </div>
        )
    }
}

export default Table
