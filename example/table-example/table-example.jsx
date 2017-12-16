import React from "react";
import Table from "../../components/table/table/table.jsx";//表格
import Pagination from "../../components/table/pagination/pagination.jsx";//分页
import Utils from "../../components/util/util.jsx";
import Api from "../../api/api.jsx";
import "./table-example.scss";
const Column = Table.Column;

// 操作按钮
class OperateProject extends React.Component{
    constructor(props){
        super(props);
        this.editProject=this.editProject.bind(this);
        this.removeProject=this.removeProject.bind(this);
    }
    editProject(){
        this.props.onChange('edit');
    }
    removeProject(){
        this.props.onChange('remove');
    }
    render(){
        let {data}=this.props;
        return(
                <ul className="operateTools">
                    <li>
						<span onClick={this.editProject}>
							编辑
						</span>
                    </li>
                    {
                        data.projectState==4?
                            <li className="devide-line">
                                <i className="iconfont icon-icon-fengexian"></i>
                            </li>:null
                    }
                    {
                        data.projectState==4?
                            <li>
								<span onClick={this.removeProject}>
									删除
								</span>
                            </li>:null
                    }
                </ul>
        )
    }
}

//序号
class IdxComp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let pageNum = this.props.pageNum?this.props.pageNum:1,
            pageSize =this.props.pageSize?this.props.pageSize:10,
            n=(pageNum-1)*pageSize+1;
        return (
            <span>{this.props.index+n}</span>
        )
    }
}

class TableExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            total:0,
            loading:false,
            params:{
                pageNum:1,
                pageSize:10
            }
        };
        this.handleChange=this.handleChange.bind(this);
    }
    componentWillMount(){
        this.setState({loading:true});
        Utils.fetchHandler({
            url:Api.getTableData,
            type:"get",
            success:(data)=>{
                this.setState({
                    data:data.data,
                    total:data.records,
                    loading:false
                });
            }
        });
    }
    handleChange(type,data){

    }
    //分页回调函数
    onPageChange(page){
       console.log(page)
    }
    getAuditTypeName(type){
        switch (type){
            case 1:return "<span class='checkOff'>审核中</span>";break;
            case 2:return "审核通过";break;
            case 3:return "审核未通过";break
        }
    }
    render(){
        let {data,params,total,loading}=this.state;
        data.map((item)=>{
            item.projectState=this.getAuditTypeName(item.projectState)
        });
        return(
            <div>
                <Table loading={loading} data={data}  className="table">
                    <Column header={<span>序列号</span>} cell={IdxComp} pageNum={params.pageNum} pageSize={params.pageSize}/>
                    <Column header={<span>操作</span>} colKey="operate" cell={OperateProject} onCellChange={this.handleChange}></Column>
                    <Column header={<span>项目编号</span>} colKey="code"></Column>
                    <Column header={<span>项目名称</span>} colKey="name"></Column>
                    <Column header={<span>项目经理</span>} colKey="projectManagerName"></Column>
                    <Column header={<span>项目状态</span>} colKey="projectStateName"></Column>
                    <Column header={<span>参考编码</span>} width='250' colKey="referenceCode"></Column>
                    <Column header={<span>项目简介</span>} htmlFormat={true}  colKey="contentAb"></Column>
                </Table>
                {/*{*/}
                    {/*total ? <Pagination total={total}  showGoPage={true} onPageChange={this.onPageChange}/> : null*/}
                {/*}*/}
            </div>
        )
    }
}

export default TableExample
