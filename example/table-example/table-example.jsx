import React from "react";
import Present from "../../app/present/present.jsx";
import Table from "../../components/table/table.jsx";
import Api from "../../api/api.jsx";
import Utils from "../../components/util/util.jsx";
import "./table-example.scss";

class Opertate extends React.Component{
    constructor(props){
        super(props);
        this.actionRemove=this.actionRemove.bind(this);
        this.actionEdit=this.actionEdit.bind(this);
    }
    actionEdit(){
        this.props.onCellEvent("edit",123)
    }
    actionRemove(){
        this.props.onCellEvent("remove")
    }
    render(){
        return(
            <ul className="operateArea">
                <li className="operateOption" onClick={this.actionEdit}>编辑</li>
                <li className="devide-line"><i className="iconfont icon-icon-fengexian"/></li>
                <li className="operateOption" onClick={this.actionRemove}>删除</li>
            </ul>
        )
    }
}

class TableExampleNew extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            total:"",
            loading:false,
        };
        this.searchData=this.searchData.bind(this);
        this.onPageChange=this.onPageChange.bind(this);
        this.onCellClick=this.onCellClick.bind(this);
        this.checkedArrCall=this.checkedArrCall.bind(this);
    }
    searchData(){
        this.setState({loading:true});
        Utils.fetchHandler({
            url:Api.getNewTableData,
            type:"get",
            success:(data)=>{
                setTimeout(()=>{
                    this.setState({
                        data:data.list,
                        total:data.total,
                        loading:false
                    });
                },500)
            }
        });
    }
    componentWillMount(){
        this.searchData()
    }
    onPageChange(page){
        console.log(page,'传回来的page')
        this.searchData()
    }
    onCellClick(data,type){
        console.log(data,type,"type")
    }
    checkedArrCall(selectArr){
        console.log(selectArr,'selectArr');//已经选中的数据
    }
    render(){
        let {data,loading,total}=this.state;
        const column=[
            {title:"checkBox",colName:"checkBox",width:"100px"},
            {title:"序列号",colName:"orderNum",width:"100px"},
            {title:"姓名",colName:"name"},
            {title:"年龄",colName:"age",width:"100px",fontColor:"#f73352",sort:true},
            {title:"性别",colName:"sex"},
            {title:"爱好",colName:"hobby"},
            {title:"地址",colName:"address"},
            {title:"编号",colName:"number",sort:true},
            {title:"操作",colName:"operate",width:"200px",cell:{Opertate},onCellEvent:this.onCellClick}
        ];
        return(
            <div className="table-example">
                <Present title="表格"
                         introduce={[
                             "1、可自定义表格宽度，每一列宽度，字体颜色以及是否有边框",
                             "2、可自定义是否有复选框以进行选择",
                             "3、可设置是否需要加载中图片",
                             "4、可排序操作，排序的依据项得是Number(数据)后不是NAN",
                             "5、可自定义是否需要分页，分页可自定义是否需要跳转到多少页区域，分页在第一页的时候不显示上一页，在最后一页的时候不显示下一页",
                             "6、可自定义操作选项",
                             "7、列数过多可调整表格组件table.scss表格宽度以有水平滚动条出现且不影响整体布局"
                         ]}
                />
                <Table data={data}
                       column={column}
                       loading={loading}
                       onSelect={this.checkedArrCall}//当有复选框的时候配置选择回调
                       pagination={{
                           total:total,
                           onPageChange:this.onPageChange
                       }}
                />
            </div>
        )
    }
}

export default TableExampleNew