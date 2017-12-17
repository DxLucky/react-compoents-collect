import React from "react";
import Present from "../../app/present/present.jsx";
import Table from "../../components/table/JokerTable/table.jsx";
import Api from "../../api/api.jsx";
import Utils from "../../components/util/util.jsx";
import "./table-example.scss";

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
    render(){
        let {data,loading,total}=this.state;
        const column=[
            {title:"checkBox",colName:"checkBox",width:"100px"},
            {title:"序列号",colName:"orderNum",width:"100px"},
            {title:"姓名",colName:"name"},
            {title:"年龄",colName:"age",width:"30px",fontColor:"#f73352"},
            {title:"性别",colName:"sex"},
            {title:"爱好",colName:"hobby"},
            {title:"地址",colName:"address"}
        ];
        return(
            <div className="table-example">
                <Present title="新表格"/>
                <Table data={data}
                       column={column}
                       loading={loading}
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